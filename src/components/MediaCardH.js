import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    border: "1px solid #FAD000",
    marginTop: "2em",
    height: "90px",
    cursor: "pointer",
    transition: "background-color 0.5s",
    "&:hover":{
        backgroundColor: "#fad30fad"
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: "left"
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "30%",
    height: "90px",
    padding: "0 .5em"
    
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaCardH(props) {
  const {name, price, person, luggage, image} = props.post;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} elevation={0}>
        <CardMedia
        className={classes.cover}
        image={image}
        
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" style={{color: "#FF7400", fontWeight: "500", fontSize:"20px"}}>
            {price}
          </Typography>
        </CardContent>
      </div>
      
    </Card>
  );
}
