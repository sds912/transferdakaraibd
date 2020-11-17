import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Footer = () =>{
  return (
    <div className="container-fluid p-0 bg-dark p-5" style={{marginTop: "10em", minHeight: "180px"}}>

      <div className="container">
        <div className="row ">
               <div className="col-sm-4 mb-5">
                   <div className="row">
                     <div className="col-5">
                       <img   src="/assets/img/footer.png" className="img-fluid mr-0" />
                     </div>
                     <div className="col-7" style={{color: "#ffffff", fontSize:"12px", textAlign:"left"}}>
                       Service de location de véhicule <br/>
                       Disponible 24H/24 et 7J/7
                     </div>
                   </div>
               </div>
               <div className="col-sm-4 mb-5">
               <h5 style={{color: "#ffffff", textAlign:"left"}}>Contactez-nous:</h5>
                 
               <div style={{ margin: "0em auto", textAlign: "left", fontSize: "12px", color: "#ffffff"}}>
                    <p> 
                        <EmailIcon style={{marginRight: ".5em", color: "#FAD000"}} />
                        <span>contacttransfert@hotmail.com</span> 
                    </p>
                    <p>
                       <PhoneIcon style={{marginRight: ".5em",color: "#FAD000"}} />
                       <span>+227 78 455 45 22</span> 
                    </p>
                    <p>
                        <LocationOnIcon style={{marginRight: ".5em", color: "#FAD000"}} />
                        <span>Dakar Patte d'oies</span>
                    </p>

                    
                </div>
               </div>
               <div className="col-sm-4">
                 <h5 style={{color: "#ffffff"}}>Rejoignez-nous sur:</h5>
               <div style={{width: "140px", margin: ".5em auto", display: "flex", textAlign: "center" , backgroundColor: "#ffffff"}} >
                        <FacebookIcon style={{fontSize: "36px", color: "#3b5998", marginLeft:"15px", cursor: "pointer"}} />
                        <LinkedInIcon  style={{fontSize: "36px", color: "#007bb5",cursor: "pointer"}}/>
                        <InstagramIcon  style={{fontSize: "36px", color: "#ff0084",cursor: "pointer"}}/>
                </div>
               </div>
        </div>

      </div>
      <div className="container">
         <p style={{textAlign: "center", fontSize:"12px", color: "white"}}>&copy; Copyright TRANSFERTDAKARAIBD {new Date().getFullYear()} all right reserve by </p>
      </div>
    </div>
  );
}

export default Footer;
