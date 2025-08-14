import React from "react";
import './App.css'

const Card = ({avatar, name, bio, email, location, role})=>{


	const handleClick = (e)=>{

		let isFollow =e.target.textContent;


	}

	const showUserProfile = ()=>{
		console.log('User profile info should be rendered here');
	}

	return (
		
		<div onClick={showUserProfile}className="userCard">
			<img src={avatar} alt={name}/>
			<h2>{name}</h2>
			<p>{bio}</p>
			<p>{email}</p>
			<p>{location}</p>
			<p>{role}</p>	
			<button onClick={handleClick}>Follow</button>			
		</div>
	)
}

export default Card;