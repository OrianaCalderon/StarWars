import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js"

//react router-dom
import { Link } from "react-router-dom";

//style-css
import "../../styles/carousels.css"

//image
import foto from "../../img/starWars.png"


const CardPlanets = ({ character }) => {
    const { store, actions } = useContext(Context);
    const { population, terrain, name, created } = character.properties;
    const { uid } = character

    return (
        <>

            <div className="col-3 mx-3 card" >
                <img src={foto} className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title"><p><b>{name}</b></p></h5>
                    <p className="card-text my-0">Population: {population}</p>
                    <p className="card-text my-0">Terrain: {terrain}</p>
                    <div className="div-card-buttons-planets">
                        <div className="col">
                            <Link to={`/planet/${uid}`} className="btn btn-outline-primary button-learn-more">
                                Learn more!
                            </Link>
                        </div>
                        <div className="col">
                            <button type="button"
                                className="btn btn-outline-warning button-heart"
                                onClick={() => { actions.addFavoritos(character._id) }}>
                                <i className="far fa-heart"></i>
                            </button>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default CardPlanets;