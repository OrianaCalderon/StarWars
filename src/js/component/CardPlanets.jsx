import React from "react";

//react router-dom
import { Link } from "react-router-dom";

//style-css
import "../../styles/carousels.css"


const CardPlanets = ({ character }) => {
    const { population, terrain, name } = character.properties;
    const {uid}=character

    return (
        <>

            <div className="col-3 mx-3 card" >
                <img src="https://picsum.photos/seed/picsum/20/20" className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text my-0">Population: {population}</p>
                    <p className="card-text my-0">Terrain: {terrain}</p>

                    <Link to={`/`} className="btn btn-outline-primary button-learn-more">
                        Learn more!
                    </Link>
                    <Link to={`/`} className="btn btn-outline-warning button-heart">
                        <i className="far fa-heart"></i>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default CardPlanets;