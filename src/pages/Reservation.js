import { makeStyles } from '@material-ui/core';
import React from 'react'
import ReservationForm from '../components/reservationForm'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { faUsers, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarList from '../components/CarList';


const useStyles = makeStyles({
    root: {
      width: "100%",
      marginTop: "2em"
    },
    media: {
      height: 210,
    },
    btnReserve:{
      
      fontSize: "22px",
      fontWeight: "500",
      width: "100%",
      marginTop: ".5em",
      bottom: "0",
    padding: ".6em",
    textAlign: "center",
    backgroundColor: "#FF7400",
    cursor: "pointer"
    },
    caracteristque:{
        padding: "0",
        textAlign: "left",
        listStyle: "none",
        fontSize: "22px !important"
    },
    item:{
        padding: "0"
    }
  });

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


 

const Reservation = ({match}) => {

    const classes = useStyles();
    let params = match.params;

    

    const {id, image, person, luggage, price, description} = cars.find((elt) => elt.id == params.id);


  return (
  
    <div className="container-fluid mt-3">
        <div className="row">
            <div className="col-sm-6">
              <div >
                <img className="img-fluid" width="100%" src={image} alt=""/>
              </div>
              <div>
                <p className="my-3">{description}</p>
                <ul className={classes.caracteristque}>
                    <li style={{color: "#FF7400", fontSize: "16px", fontWeight: "600"}}>
                      <FontAwesomeIcon icon={faMoneyBill} style={{fontSize: "16px", opacity: ".7", marginRight:".3em"}}  />
                      {price} <span>cfa</span>
                      </li>
                    <li>
                      <FontAwesomeIcon icon={faUsers} style={{fontSize: "16px", opacity: ".7", marginRight: ".3em"}}  />
                      {person} <span>Personne(s)</span>
                      </li>
                    <li>
                      <BusinessCenterIcon style={{fontSize: "16px", opacity: ".7", marginRight: ".3em"}} />
                      {luggage} <span>Valises</span>
                      </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <h4 style={{fontSize: "16px", fontWeight:"600", marginBottom:"1.5em"}}>Réserver par Téléphone au : <span style={{color:"#FF7400"}}>+221 77 854 65 24</span></h4>
              <ReservationForm car={id} />
              </div>
        </div>

    
        <CarList />
     
    </div>
   

  );
}

export default Reservation;
