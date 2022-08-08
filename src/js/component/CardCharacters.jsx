import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js"

//style-css
import "../../styles/carousels.css"

//react router-dom
import { Link } from "react-router-dom";


const CardCharacters = ({ character }) => {

    const { gender, hair_color, name, eye_color, uid } = character.properties;

    return (
        <>

            <div className="col-3 mx-3 card" >
                <img src="https://picsum.photos/seed/picsum/20/20" className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text my-0">Gender: {gender}</p>
                    <p className="card-text my-0">Hair color: {hair_color}</p>
                    <p className="card-text">Eye color: {eye_color}</p>
                    <Link to={`/character/${uid}`} className="btn btn-outline-primary button-learn-more">
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

CardCharacters.propTypes = {
    character: PropTypes.object,
};

export default CardCharacters;


