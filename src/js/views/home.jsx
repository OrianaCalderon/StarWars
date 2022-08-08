import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";



//components
import Carousel from "../component/Carousel.jsx";


//css
import "../../styles/carousels.css"


const Home = () => {

	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<div className="row">
				<Carousel  title={"Characters"} items={store.people}/>
				<Carousel title={"Planets"} items={store.planets} />
	
			</div>



		</div>
	)
};

export default Home;