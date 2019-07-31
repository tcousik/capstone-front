import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { orange } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import swal from 'sweetalert'

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(orange[700]),
    backgroundColor: orange[700],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
}))(Button);

const ranges1 = [
  {
    value: 'Denver',
    label: 'Denver'
  },
  {
    value: 'Boulder',
    label: 'Boulder',
  },
  {
    value: 'Colorado Springs',
    label: 'Colorado Springs',
  },
  {
    value: 'Fort Collins',
    label: 'Fort Collins',
  },
  {
    value: 'Breckenridge',
    label: 'Breckenridge'
  },
  {
    value: 'Durango',
    label: 'Durango',
  }
]

const ranges2 = [
  {
    value: 'Beginner',
    label: 'Beginner',
  },
  {
    value: 'Experienced',
    label: 'Experienced',
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
    width: 450,
  },
  margin: {
    margin: theme.spacing(2),
  },
  textField: {
    flexBasis: 450,
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "purple !important"
  },
  submit: {
    marginLeft: '124px'
  }
}));

export default function OutlinedInputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    location: '',
    instrument: '',
    experience: '',
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
        select
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
      >
        {ranges1.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
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
        {ranges2.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Link to="/cities">
        <ColorButton
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          className={classes.submit}
        >
          Save
        </ColorButton>
      </Link>
    </div>
  );
}
