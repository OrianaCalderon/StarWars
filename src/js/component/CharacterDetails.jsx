import React, { useContext } from "react";
import PropTypes, { element } from "prop-types";

//react-router
import { Context } from "../store/appContext.js"
import {useParams} from "react-router"



//style-css
import "../../styles/carousels.css"




const CharacterDetails = ({ character }) => {

    
    const { gender, name, eye_color,birth_year,height,skin_color} = character.properties;
    

    return (
        <>

            <div className="container" >
                <div className="row">
                    <div className="col-6">
                        <img src="https://picsum.photos/seed/picsum/20/20" className="card-img-top" alt="imagen" />
                    </div>
                    <div className="col-6">
                        <p>{name}</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, molestiae dolor cumque 
                            similique recusandae provident exercitationem amet? Nisi beatae, odit, recusandae doloribus
                            nulla fuga soluta exercitationem non possimus consectetur in.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, molestiae dolor cumque 
                            similique recusandae provident exercitationem amet? Nisi beatae, odit, recusandae doloribus
                            nulla fuga soluta exercitationem non possimus consectetur in.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, molestiae dolor cumque 
                            similique recusandae provident exercitationem amet? Nisi beatae, odit, recusandae doloribus
                            nulla fuga soluta exercitationem non possimus consectetur in.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p>Name</p>
                        {name}
                    </div>
                    <div className="col-2">
                        <p>Birth Year</p>
                        <p>{birth_year}</p>
                    </div>
                    <div className="col-2">
                        <p>Gender</p>
                        {gender}
                    </div>
                    <div className="col-2">
                        <p>Height</p>
                        {height}
                    </div>
                    <div className="col-2">
                        <p>Skin Color</p>
                        {skin_color}
                    </div>
                    <div className="col-2">
                        <p>Color de ojos</p>
                        {eye_color}
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