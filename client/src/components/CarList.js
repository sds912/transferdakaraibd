
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MediaCard from './MediaCard';

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
    image: "/assets/img/berline.jpg",
    description: "Pour les personnes qui aiment voyager dans le calme et confort"
  },
  {
    id: 2,
    name: "Berline Luxe",
    price: "30000",
    person: "2",
    luggage:"4",
    image: "/assets/img/berlineluxe.jpg",
    description: "Pour le transport de personnes importantes: rapide, sécurisé et confortable"

  },
  {
    id: 3,
    name: "4x4",
    price: "35000",
    person: "3",
    luggage:"4",
    image: "/assets/img/4x4.png",
    description: "Incursion à quatres dans le plus grand confort et sécurité"

  },
  {
    id: 4,
    name: "Mini Van",
    price: "60000",
    person: "6",
    luggage:"10",
    image: "/assets/img/minivan.jpg",
    description: "Idéale pour vos sorties en famille et le transport de vos enfants"
    
  },
 
]

const CarList = () => {
    const classes = useStyle();
  return (
      <div className={classes.root}>
      <Typography className={classes.title}>Nos Forfaits</Typography>
      <div className={classes.divider}></div>
      <div className="container">
        <div class="row">
          {
            cars.map((item) =><div class="col-sm-6 col-lg-4"><MediaCard post={item} /></div> )
          }
        </div>
      </div>
  </div>
  );
}

export default CarList;
