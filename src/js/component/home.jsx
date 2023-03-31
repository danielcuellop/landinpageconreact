import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const  Home = () => {
	return (
		<>
		<Navbar/>
		<br></br>
		<Jumbotron/>
		<br></br>
		<Cards/>
		</>
	);
};

export default Home;
