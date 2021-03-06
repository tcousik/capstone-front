import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    width: 550,
    margin: 30,
    height: 420
  },
  media: {
    height: 350,
  },
});

function CityCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea style={{color: green}}>
        <CardMedia
          value={props.name}
          className={classes.media}
          image={props.image}
          title="CityPic"
        />
        <CardContent
        onClick={(event) => props.history.push(`${event.target.innerText}`)}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withRouter(CityCard)
