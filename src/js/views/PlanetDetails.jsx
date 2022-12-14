import React, { useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

//react-router
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";

//image
import foto from "../../img/starWars.png"

//style-css
import "../../styles/carousels.css";


const PlanetDetails = () => {
    const params = useParams();

    const { store, actions } = useContext(Context);

    const [character, setCharacter] = useState({});

    function getDetail() {
        const detail = store.planets.find((character) => {
            return character.uid == params.id;
        });
        if (detail != undefined) {
            setCharacter(detail)
        }
    }

    useEffect(() => {
        getDetail()
    }, [store.planets]);

    return (
        <>
            <div className="container div-planets-details">
                <div className="row">
                    <div className="col-6">
                        <img
                            src={foto}
                            className="card-img-top p-4"
                            alt="imagen"
                        />
                    </div>
                    <div className="col-6 div-title-planets">
                        <h1 className="title-name-characters">{character.properties?.name}</h1>
                        <p className="description-planets">
                            {character?.description}
                        </p>
                    </div>
                </div>
                <div className="row div-column-details">
                    <div className="col-2">
                        <p><b>Name</b></p>
                        {character.properties?.name}
                    </div>
                    <div className="col-2">
                        <p><b>Climate</b></p>
                        <p>{character.properties?.climate}</p>
                    </div>
                    <div className="col-2">
                        <p><b>Population</b></p>
                        {character.properties?.population}
                    </div>
                    <div className="col-2">
                        <p><b>Orbital Period</b></p>
                        {character.properties?.orbital_period}
                    </div>
                    <div className="col-2">
                        <p><b>Rotation period</b></p>
                        {character.properties?.rotation_period}
                    </div>
                    <div className="col-2">
                        <p><b>Diameter</b></p>
                        {character.properties?.diameter}
                    </div>
                </div>
            </div>
        </>
    );
}

PlanetDetails.propTypes = {
    planets: PropTypes.object,
};

export default PlanetDetails;