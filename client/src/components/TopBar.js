import {  makeStyles, Typography } from '@material-ui/core'
import React from 'react'  
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-router-dom';



const useStyle = makeStyles((theme) =>({
  carrousel:{
    position: "relative",
    width: "100%",
    height: "56px",
    padding: ".5em",
    backgroundColor: "#ffffff",
    display: "block"
  },
  menuIcon:{
    color: "#ffffff",
    fontSize: "36px",
    cursor: "pointer"

},
menuIconBox:{
    width:"46px",
    height: "36px",
    position: "absolute",
    right: ".5em",
    //padding: "1em",
    backgroundColor: "#FAD000",

},

title:{
    width:"120px",
    position: "absolute",
    left: ".5em",
    //padding: "1em",
    backgroundColor: "#FAD000",
    fontFamily: "arial",
    fontSize: "20px",
    fontWeight: "600",
    marginTop: ".5em",
    cursor: "pointer"
},






  
}))


const TopBar = () =>{
    const classes = useStyle();

   return (
   
     <div className={classes.carrousel} >
         <div className={classes.menuIconBox}>
           <DehazeIcon className={classes.menuIcon} />
         </div>
         <Link to="/" style={{textDecoration: "none !important", color: "inherit"}}>
         
         <h3 className={classes.title}> <span style={{color: "#ffffff"}}>TRANSFERT</span>DAKARAIBD</h3>
         </Link>
     </div>

   )
}

export default TopBar


