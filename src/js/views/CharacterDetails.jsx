import React, { useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

//react-router
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";

//style-css
import "../../styles/carousels.css";

const CharacterDetails = () => {
    const params = useParams();

    const { store, actions } = useContext(Context);

    const [character, setCharacter] = useState({});

    function getDetail() {
        const detail = store.people.find((character) => {
            return character.uid == params.id;
        });
        if (detail != undefined) {
            setCharacter(detail)
        }
    }

    useEffect(() => {
        getDetail()
    }, [store.people]);

    return (
        <>
            <div className="container div-people-details">
                <div className="row">
                    <div className="col-6">
                        <img
                            src="https://picsum.photos/seed/picsum/100/100"
                            className="card-img-top p-4"
                            alt="imagen"
                        />
                    </div>
                    <div className="col-6">
                        <h1 className="title-name-characters">{character.properties?.name}</h1>
                        <p>
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
                    <p><b>Birth Year</b></p>
                        <p>{character.properties?.birth_year}</p>
                    </div>
                    <div className="col-2">
                        <p><b>Gender</b></p>
                        {character.properties?.gender}
                    </div>
                    <div className="col-2">
                        <p><b>Height</b></p>
                        {character.properties?.height}
                    </div>
                    <div className="col-2">
                        <p><b>Skin Color</b></p>
                        {character.properties?.skin_color}
                    </div>
                    <div className="col-2">
                        <p><b>Color de ojos</b></p>
                        {character.properties?.eye_color}
                    </div>
                </div>
            </div>
        </>
    );
};

CharacterDetails.propTypes = {
    character: PropTypes.object,
};

export default CharacterDetails;
