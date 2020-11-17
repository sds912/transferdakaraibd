import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import WebIcon from '@material-ui/icons/Web';




function AboutUS() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
         <div className="col-sm-6">
             <img src="/assets/img/rental.jpg" className="img-fluid" />
         </div>
         <div className="col-sm-6 my-3" style={{textAlign: "left", fontSize:"12px"}}>
             <h4 style={{fontSize:"22px", fontWeight:"600"}}>TRANSFERTDAKARAIBD</h4>
             <p>est un service de location de voitures qui met à votre disposition <br /> des voitures en trés bon état. 
             Nous vous offrons des forfaits qui inclus: <br /> 
             <span >
                 <img src="/assets/img/peage.png" width="18px" height="18px" className="mr-2" />
                 Peage
                 </span> <br /> 
             <span >
                <img src="/assets/img/parking.png" width="18px" height="18px" className="mr-2" />
                 Parking
            </span><br /> 
             <span >
                <img src="/assets/img/bagage.png" width="18px" height="18px" className="mr-2" />
                 Montée et Décente des bagages
             </span>

             </p>
             <h5 style={{color:"#FF7400"}}>Mode de Réservation</h5>
             <ul style={{listStyle:"none", padding:"0", marginLeft: ".5em"}}>
                  <li className="mb-4">
                      <WebIcon style={{fontSize:"18px", marginRight: ".3em"}} />
                      <span style={{fontWeight: "800", fontSize:"18px"}}>Réservation direct sur le site</span>
                      <div>Connetez-vous sur le site, choisissez un forfait et remplissez le formulaire</div>
                  </li>
                  <li>
                     <PhoneIcon style={{fontSize:"18px", marginRight: ".3em"}} />
                      <span style={{fontWeight: "800", fontSize:"18px"}}>Réservation par Téléphone</span>
                      <div>
                          <p>Vous pouvez réserver en appelant au <br/>
                          <span style={{color:"#FF7400"}}>+221 77 854 65 24</span> <br/>
                          Nous sommes disponibles 24H/24 et 7J/7</p>
                      </div>
                  </li>
             </ul>
         </div>
      </div>
    </div>
  );
}

export default AboutUS;
