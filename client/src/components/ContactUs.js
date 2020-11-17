import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';



const useStyle = makeStyles((theme) => ({
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
}))

const ContactUs = () => {
         const classes = useStyle();
        return (
            <div className="containe-fluid px-5 bg-primary pb-5" style={{textAlign: "left", marginTop: "2em", backgroundImage:"url('assets/img/back3.jpg')", backgroundPosition: "center", backgroundSize:"cover"}}>
               <Typography className={classes.title}>Nous Contacter</Typography>
               <div className={classes.divider}></div>
               <br/>
               <br/>
                <div className="row">
                <div className="col-sm-12 col-md-6 mb-5" style={{
                          backgroundColor: "#00ae5a8c",
                          textAlign: "center"

                }}>
                <div style={{maxWidth: "350px", margin: "4em auto", textAlign: "left", fontSize: "18px", color: "#ffffff"}}>
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

                    <div style={{width: "140px", margin: "2em auto", display: "flex", textAlign: "center" , backgroundColor: "#ffffff"}} >
                        <FacebookIcon style={{fontSize: "36px", color: "#3b5998", marginLeft:"15px", cursor: "pointer"}} />
                        <LinkedInIcon  style={{fontSize: "36px", color: "#007bb5",cursor: "pointer"}}/>
                        <InstagramIcon  style={{fontSize: "36px", color: "#ff0084",cursor: "pointer"}}/>
                    </div>
                </div>
               

                </div>
                    <div className="col-sm-12 col-md-6">
                        <form>
                        <div class="form-row">
                                <div class="form-group col-md-6">
                                <label style={{fontSize: "18px", fontWeight: "600", color: "#FF7400"}}>Nom</label>
                                <input type="text" class="form-control" placeholder="Nom" />
                                </div>
                                <div class="form-group col-md-6">
                                <label style={{fontSize: "18px", fontWeight: "600", color: "#FF7400"}}>Prénom</label>
                                <input type="text" class="form-control"  placeholder="Prénom" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize: "18px", fontWeight: "600", color: "#FF7400"}}>Email</label>
                                <input type="email" class="form-control" placeholder="email" />
                            </div>
                            <div class="form-group">
                                <label style={{fontSize: "18px", fontWeight: "600", color: "#FF7400"}}>Votre Message</label>
                                <textarea class="form-control"  rows="3"></textarea>
                            </div>
                        </form>
                        <button className="btn btn-lg text-white btn-block" style={{backgroundColor: "#FF7400"}}>
                             Envoyer
                        </button>
                    </div>

               
                </div>
            </div>
        )
    
}

export default ContactUs
