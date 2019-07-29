import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { green } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[800]),
    backgroundColor: green[800],
    '&:hover': {
      backgroundColor: green[800],
    },
  },
}))(Button);

const ranges = [
  {
    value: 'Beginner',
    label: 'Beginner',
  },
  {
    value: 'Intermediate',
    label: 'Intermediate',
  },
  {
    value: 'Professional',
    label: 'Professional',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
  },
  textField: {
    flexBasis: 450,
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "green !important"
  },
}));

export default function OutlinedInputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    location: '',
    password: '',
    weight: '',
    experience: '',
    bio: ''
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Name"
        InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
      />
      <TextField
        id="outlined-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Location"
        value={values.location}
        onChange={handleChange('location')}
        InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
      />
      <TextField
        id="outlined-adornment-instrument"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Instrument"
        value={values.instrument}
        onChange={handleChange('instrument')}
        InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
      />
      <TextField
        select
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Experience"
        value={values.experience}
        onChange={handleChange('experience')}
        InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <ColorButton
        type="submit"
        fullWidth
        color="primary"
        variant="contained"
        className={classes.submit}
      >
        Save
      </ColorButton>
    </div>
  );
}
