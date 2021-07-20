import React from 'react'

import { Grid, Paper } from '@material-ui/core'

import { useStyles } from '../styles/globalStyles'
 
export default function Text({ text= '' }) {
    const classes = useStyles()
    return (
        <Grid container spacing={3}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Paper className={classes.paper}>
                    {text}
                </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
}
