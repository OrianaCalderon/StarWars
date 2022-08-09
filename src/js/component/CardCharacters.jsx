import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js"

//image
import foto from "../../img/starWars.png"

//style-css
import "../../styles/carousels.css"

//react router-dom
import { Link } from "react-router-dom";


const CardCharacters = ({ character }) => {

    const { store, actions } = useContext(Context);
    const { gender, hair_color, name, eye_color, created } = character.properties;
    const { uid } = character;

    return (
        <>

            <div className="col-3 mx-3 card" >
                <img src={foto} className="card-img-top " alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title"><p><b>{name}</b></p></h5>
                    <p className="card-text my-0">Gender: {gender}</p>
                    <p className="card-text my-0">Hair color: {hair_color}</p>
                    <p className="card-text">Eye color: {eye_color}</p>
                    <div className="div-card-buttons">
                        <div className="col">
                            <Link to={`/character/${uid}`} className="btn btn-outline-primary button-learn-more">
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

CardCharacters.propTypes = {
    character: PropTypes.object,
};

export default CardCharacters;


