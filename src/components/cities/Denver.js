import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 550,
    margin: '0 0 40px'
  },
  media: {
    height: 350,
  },
});

export default function Denver() {
  const classes = useStyles();

  return (
    <Card className="cardz" className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Denver
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Music Scene Text
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
