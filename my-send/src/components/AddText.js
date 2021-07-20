import React, { useState, useEffect, useReducer } from 'react'

import { Button, TextField, Grid, Paper, CircularProgress } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import SendRounded from '@material-ui/icons/SendRounded'
import Swal from 'sweetalert2'

import { getText } from '../services/service'
import { userTextReducer } from '../hooks/UseReducterText'
import Text from './Text'

import { useStyles } from '../styles/globalStyles'

export default function AddText() {
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)

    const [texts, dispatch] = useReducer(userTextReducer, '')
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()
        const textInput = document.querySelector('#textInput').value
        setText(textInput)        
    }

    useEffect(() => {
        if(!text) return
        setLoading(true)
        getText(text)
        .then((data) => {
            setLoading(false)
            dispatch({ type: 'add', payload: data })
        }).catch((e) => {
            setLoading(false)
            Swal.fire('Debes ingresar texto')
        })
    }, [text])
    
    const Loading = () => (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    { loading && <Loading /> }
                    <Paper className={classes.paper}>
                        <div>
                            <form onSubmit={handleSubmit} className={classes.search}>
                                <TextField 
                                    id="textInput" 
                                    label="Insert text"
                                    variant="outlined"
                                    className={classes.textField}
                                />
                                <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<SendRounded />}
                                        type="submit"
                                    >
                                        Send
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}>
                    <h2>Results: </h2>
                </Grid>
            </Grid>
            {
                texts.length ? (
                    texts.map((text, i) => {
                        return (
                            <Text 
                                text={text}
                                key={i}
                            />
                        )
                     })
                ):
                <Alert severity="info">No hay datos...</Alert>
            }
        </div>
    )
}


