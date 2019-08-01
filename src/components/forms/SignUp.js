import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { orange } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(orange[700]),
    backgroundColor: orange[700],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
 '@global': {
   body: {
     backgroundColor: theme.palette.common.white,
   },
 },
 paper: {
   marginTop: theme.spacing(8),
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
 },
 form: {
   width: '100%',
   marginTop: theme.spacing(1),
 },
 submit: {
   margin: theme.spacing(3, 0, 2),
 },
 notchedOutline: {
   borderWidth: "1px",
   borderColor: "purple !important"
 }
}));

export default function SignUp() {
 const classes = useStyles();

 return (
   <Container component="main" maxWidth="xs">
     <CssBaseline />
     <div className={classes.paper}>
       <Typography component="h1" variant="h5">
          New User? Please Sign Up
       </Typography>
       <form className={classes.form} noValidate>
         <TextField
           variant="outlined"
           margin="normal"
           required
           fullWidth
           InputProps={{
               classes: {
                 notchedOutline: classes.notchedOutline
               }
             }}
             id="username"
            label="Username"
            name="username"
            autoComplete="username"
         />
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            InputProps={{
               classes: {
                 notchedOutline: classes.notchedOutline
               }
             }}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
         />
         <Link to ="/profile">
           <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
           >
             Sign Up
           </ColorButton>
          </Link>
       </form>
     </div>
   </Container>
 );
}
