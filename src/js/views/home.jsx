import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

//components
import CarouselCharacters from "../component/CarouselCharacters.jsx";
import CarouselPlanets from "../component/CarouselPlanets.jsx";

//css
import "../../styles/carousels.css"

const Home = () => {

	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<div className="row">
				<div className="div-title-people">
					<h2>Characters</h2>
				</div>

				<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
					<div className="row flex-row flex-nowrap carouselWrap">
						{
							store.people.map((character)=>{
								return(
									<CarouselCharacters key={`character-${character._id}`} character={character} />
								)
							})
						}
					</div>
				</div>
				<div className="div-title-planet">
						<h2>Planets</h2>
				</div>

				<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
					<div className="row flex-row flex-nowrap carouselWrap">
						{
							store.planets.map((character)=>{
								return(
									<CarouselPlanets key={`character-${character._id}`} character={character} />
								)
							})
						}
					</div>
				</div>





				






				
			</div>



		</div>
	)
};

export default Home;