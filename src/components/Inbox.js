import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 650,
    backgroundColor: theme.palette.background.paper,
    marginTop: 50,
    borderStyle: 'solid',
    marginLeft: '100px'
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root} >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/lucy-van-pelt-snoopy-the-musical--67.7.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Looking for a professional drummer"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors - Yesterday
              </Typography>
              {" — I just moved to Boulder and I'd love to jam with someone..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://library.kissclipart.com/20180903/srq/kissclipart-peanuts-linus-van-pelt-clipart-linus-van-pelt-char-4289e86d5a6661de.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Our band is holding auditions for a vocalist"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Scott Skiles - Yesterday
              </Typography>
              {" — Wish I could join, but I'm out of town this weekend…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/236x/79/fd/6f/79fd6f3cefb106575a518c0ced91ac13--linus-peanuts-peanuts-cartoon.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Beginner guitarist looking for lessons"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams - 3 days ago
              </Typography>
              {' — Do you or anyone you know teach lessons? I...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://vignette.wikia.nocookie.net/ideas/images/1/11/Snoopy_Sticker_Dog_From_Peanuts_Thinking_Vinyl_Decal.JPG/revision/latest?cb=20101230083742" />
        </ListItemAvatar>
        <ListItemText
          primary="Looking to start up a band. Interested?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Tim Duncan - 4 days ago
              </Typography>
              {' — Interested? I saw that you are a professional drummer...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/PigPen_%28Peanuts%29.png/220px-PigPen_%28Peanuts%29.png" />
        </ListItemAvatar>
        <ListItemText
          primary="We need another vocalist for a song"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Phil Jackson - Last week
              </Typography>
              {' — We just wrote a cool tune and we could use another singer...'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
