
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MediaCard from './MediaCard';
import MediaCardH from './MediaCardH';

const useStyle = makeStyles((theme) => ({
    root:{
     marginTop: "2em"
    },
    title:{
        textAlign: "center",
        fontSize: "22px",
        fontWeight: "600",

    },
    divider:{
        width: "180px",
        height: "4px",
        margin: "0 auto",
        backgroundColor: "#FF7400"
    }
}));

const  cars = [
  {
    id: 1,
    name: "Berline Simple",
    price: "25000",
    person: "2",
    luggage:"4",
    image: "assets/img/berline.jpg"
  },
  {
    id: 2,
    name: "Berline Luxe",
    price: "30000",
    person: "2",
    luggage:"4",
    image: "assets/img/berlineluxe.jpg"
  },
  {
    id: 3,
    name: "4x4",
    price: "35000",
    person: "3",
    luggage:"4",
    image: "assets/img/4x4.png"
  },
  {
    id: 4,
    name: "Mini Van",
    price: "60000",
    person: "6",
    luggage:"10",
    image: "assets/img/minivan.jpg"
    
  },
 
]

const CarListH = () => {
    const classes = useStyle();
  return (
      <div className={classes.root}>
      <Typography className={classes.title}>Nos Voitures</Typography>
      <div className={classes.divider}></div>
      <div className="container">
        <div class="row">
          {
            cars.map((item) =><div class="col-sm-12 col-md-6 "><MediaCardH post={item} /></div> )
          }
        </div>
      </div>
  </div>
  );
}

export default CarListH;
