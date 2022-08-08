import React, { useContext, useState, useEffect} from "react";
import PropTypes, { element } from "prop-types";

//react-router
import { Context } from "../store/appContext.js"
import {useParams} from "react-router"



//style-css
import "../../styles/carousels.css"




const CharacterDetails = () => {
    const params = useParams();
    const {store,actions}= useContext(Context);

    const [character, setCharacter]=useState({});

    useEffect(()=>{
        if(!store.people)return;
        const getCharacter = store.people.find((character)=>{
            return character.uid == params.id;
        });
        console.log(getCharacter)
        setCharacter(getCharacter.properties)
    },[store.people]);

    

    return (
        <>

            <div className="container" >
                <div className="row">
                    <div className="col-6">
                        <img src="https://picsum.photos/seed/picsum/20/20" className="card-img-top" alt="imagen" />
                    </div>
                    <div className="col-6">
                        <p>{character.properties.name}</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, molestiae dolor cumque 
                            similique recusandae provident exercitationem amet? Nisi beatae, odit, recusandae doloribus
                            nulla fuga soluta exercitationem non possimus consectetur in.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, molestiae dolor cumque. 
                            
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p>Name</p>
                        {character?.name}
                    </div>
                    <div className="col-2">
                        <p>Birth Year</p>
                        <p>{character?.birth_year}</p>
                    </div>
                    <div className="col-2">
                        <p>Gender</p>
                        {character?.gender}
                    </div>
                    <div className="col-2">
                        <p>Height</p>
                        {character?.height}
                    </div>
                    <div className="col-2">
                        <p>Skin Color</p>
                        {character?.skin_color}
                    </div>
                    <div className="col-2">
                        <p>Color de ojos</p>
                        {character?.eye_color}
                    </div>
                </div>
            </div>


        </>
    )
}

CharacterDetails.propTypes = {
    character: PropTypes.object,
};

export default CharacterDetails;