import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BoulderTable from '../tables/BoulderTable'

const useStyles = makeStyles({
  card: {
    width: 550,
    margin: 40,
    height: 420,
  },
  media: {
    height: 350,
  },
});

export default function Breckenridge() {
  const classes = useStyles();
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'center' }}>
        <Card className="cardz" className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.imgur.com/EPTqmvA.jpg?2"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Boulder
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
      <BoulderTable />
      </div>
    </div>
  );
}
