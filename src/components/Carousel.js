import { makeStyles } from '@material-ui/core'
import React from 'react'  
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import MoneyIcon from '@material-ui/icons/Money';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const useStyle = makeStyles((theme) =>({
    root:{

    },
  carrousel:{
    position: "relative",
    width: "100%",
    height: "calc(100vh - 60px)",
    backgroundImage: "url('assets/img/img2.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "block",
    textAlign: "center",
    color: "white"
  },
  welcome:{
    fontSize: "42px",
    fontWeight: "600",
    margin: "0",
  position: "absolute",
  top: "10%",
  left: "4%",
  
  
  },
  title:{
 
    fontFamily: "arial",
    fontSize: "20px",
    fontWeight: "600",
    margin: "1em auto"
},
subtitle:{
    fontSize: "16px",
    fontWeight: "400",
    margin: "0",
  position: "absolute",
  top: "30%",
  left: "4%",
  textAlign: "left",
  
  
  
  },


  btnReserve:{
    
    fontSize: "22px",
    fontWeight: "500",
    width: "100%",
    position: "absolute",
    marginTop: "60%",
    bottom: "0",
  padding: ".6em",
  textAlign: "center",
  backgroundColor: "#FF7400",
  cursor: "pointer"
  },

 

   infos:{
       width: "100%",
       height: "auto",
       backgroundColor: "#00AE5A",
       paddingBottom: "1.5em",
       fontWeigth: "600"
   }

 
  
}))


const HeaderCarousel = () =>{
    const classes = useStyle();

   return (
     <div className={classes.root}>
     <div className={classes.carrousel} >
         <p style={{ fontSize: "12px" }}>
             <span style={{marginRight:"1em" }}>contacttransfert@hotmail.com</span>
             <span>+221 77 744 36 63</span>
         </p>
         <h3 className={classes.welcome}>
             Bienvenue sur <br/>
         <h3 className={classes.title}> <span style={{color: "#ffffff",backgroundColor: "#FAD000",}}>TRANSFERT</span>DAKARAIBD</h3>

         </h3>
         <p className={classes.subtitle}>
         Service de location de voiture <br/>
          Dakar vers Saly et la sous région<br/> Peage et parking inclus
         </p>

         <div className={classes.btnReserve}>
            <LocalTaxiIcon style={{fontSize: "42px",fontWeight: "600", marginRight:".3em" }} />
            Réserver Maintenant
         </div>
     </div>

     <div className={classes.infos}>
        <div className="row">
            <div className="col-sm-12 col-lg-4 mt-3 text-white">
                <PhoneIcon style={{fontSize: "42px", fontWeight: "600", marginBottom: ".5em"}} />
                <h5>Appelez-nous</h5>
                <h5>+221 77 744 36 63</h5>
            </div>
            <div className="col-sm-12 col-lg-4 mt-3 text-white">
               <AccessTimeIcon  style={{fontSize: "42px", fontWeight: "600", marginBottom: ".5em"}} />

                <h5>Service disponible</h5>
                <h5>24H/24 et 7J/7</h5>
            </div>
            <div className="col-sm-12 col-lg-4 mt-3 text-white">
            <FontAwesomeIcon icon={faMoneyBill}  style={{fontSize: "42px", fontWeight: "600", marginBottom: ".5em"}} />

                <h5>Tarif forfaitaire</h5>
                <h5>Peage et Parking Inclus</h5>
            </div>
        </div>
     </div>
     </div>
   )
}

export default HeaderCarousel


