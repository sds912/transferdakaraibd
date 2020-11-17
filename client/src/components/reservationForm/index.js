import React from 'react'
import emailjs from 'emailjs-com'
import Axios from 'axios'

import './style.css'


const destinations = [
	{
		id: 1,
		name: "Dakar"
	},
	{
		id: 2,
		name: "Saly"
	},
	{
		id: 3,
		name: "Fatick"
	},
	{
		id: 4,
		name: "Ziguinchor"
	}
]

const   ReservationForm = () => {

	

 const sendSMS = (phone, message)	 => {

	const body = {phone, message};
	
     Axios.post('http://localhost:3001/api/messages',body, {
		 method: "POST",
		 headers: {
			 'Content-Type': 'application/json'
		 },
		 
	 }).then((value) => {

		 console.log(value)
	 }).catch((err) => {
		 console.log(err)
	 })	
}

	const sendEmail  = (e) =>  {

		e.preventDefault();

		const {name, email, phone} = e.target;

		sendSMS(phone.value, "Hello from twilio")

	   
		emailjs.sendForm('transfert_emailjs', 'template_5lxrjer', e.target, 'user_NO5CTCUDdUIug07RSYIFs')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });

		  
	  }  
	return (
		
		
				<div className="row">
					<div className="booking-form">
						
						<form  onSubmit={sendEmail}>
							<div className="row">
								<div className="col-sm-6">
									<div className="form-group">
										<span className="form-label">Nom et Prénom</span>
										<input className="form-control" name="name" type="text" placeholder="Enter your name" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<span className="form-label">Email</span>
										<input className="form-control" name="email" type="email" placeholder="Enter your email" />
									</div>
								</div>
							</div>
							<div className="form-group">
								<span className="form-label">Téléphone</span>
								<input className="form-control" name="phone" type="tel" placeholder="Enter your phone number" />
							</div>
							<div className="form-group">
								<span className="form-label">Lieu de départ</span>
								<input className="form-control" name="lieu_depart" type="text" placeholder="Enter ZIP/Location" />
							</div>
							<div className="form-group">
								<span className="form-label">Destination</span>
								<select className="form-control" name="destination">
									{
										destinations.map((item) => <option value={item.id}>{item.name}</option>)
									}
									
								</select>
								<span className="select-arrow"></span>

							</div>
							<div className="row">
								<div className="col-sm-5">
									<div className="form-group">
										<span className="form-label">Date de Départ</span>
										<input className="form-control" name="date_depart" type="date" required />
									</div>
								</div>
								<div className="col-sm-7">
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<span className="form-label">Heure</span>
												<select className="form-control">
												    <option>00</option>
													<option>01</option>
													<option>02</option>
													<option>03</option>
													<option>04</option>
													<option>05</option>
													<option>06</option>
													<option>07</option>
													<option>08</option>
													<option>09</option>
													<option>10</option>
													<option>11</option>
													<option>12</option>
													<option>13</option>
													<option>14</option>
													<option>15</option>
													<option>16</option>
													<option>17</option>
													<option>18</option>
													<option>19</option>
													<option>20</option>
													<option>21</option>
													<option>22</option>
													<option>23</option>
												</select>
												<span className="select-arrow"></span>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<span className="form-label">Minutes</span>
												<select className="form-control">
													<option>05</option>
													<option>10</option>
													<option>15</option>
													<option>20</option>
													<option>25</option>
													<option>30</option>
													<option>35</option>
													<option>40</option>
													<option>45</option>
													<option>50</option>
													<option>55</option>
												</select>
												<span className="select-arrow"></span>
											</div>
										</div>
										
									</div>
								</div>
							</div>
							<div className="form-btn">
								<input type="submit"  className="submit-btn" value="Réserver"/>
							</div>
						</form>
					</div>
				</div>
			
		


	)
}


export default ReservationForm;



