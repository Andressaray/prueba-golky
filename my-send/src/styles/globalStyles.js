import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center'
    },
    search: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: '5px',
        [theme.breakpoints.up('lg')]: {
            width: '100ch',
        },
        [theme.breakpoints.up('md')]: {
            width: '100ch',
        },
        [theme.breakpoints.up('sm')]: {
            width: '50ch',
        }
    },    
}));