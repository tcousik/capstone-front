import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(orange[700]),
    backgroundColor: orange[700],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
}))(Button);

export default class ProfPic2 extends React.Component {
  constructor() {
    super()
    this.state = {
      imageURL: ""
    }
  }

  render() {
  return (
    <div>
      <Card style={{ width: '450px'}} >
        <CardActionArea>
          <CardMedia
            style={{ height: '450px' }}
            image="https://comicvine1.cbsistatic.com/uploads/square_small/2/26320/487898-charliebrown.png"
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
      <ColorButton style={{ marginRight: '30px', marginTop: '10px'}}>
        Upload Photo
      </ColorButton>
    </div>
  );
}
}
