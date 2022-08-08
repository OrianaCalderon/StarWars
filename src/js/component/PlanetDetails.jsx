import React from "react";
import PropTypes from "prop-types";

//style-css
import "../../styles/carousels.css"




const PlanetDetails = ({ character }) => {
    const params = useParams();
    const { name, climate, population, orbital_period, rotation_period, diameter} = character.properties;
    const { uid } = params;

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
                        <p>Climate</p>
                        <p>{climate}</p>
                    </div>
                    <div className="col-2">
                        <p>Population</p>
                        {population}
                    </div>
                    <div className="col-2">
                        <p>Orbital Period</p>
                        {orbital_period}
                    </div>
                    <div className="col-2">
                        <p>Rotation Period</p>
                        {rotation_period}
                    </div>
                    <div className="col-2">
                        <p>Diameter</p>
                        {diameter}
                    </div>
                </div>
            </div>


        </>
    )
}

PlanetDetails.propTypes = {
    planets: PropTypes.object,
};

export default PlanetDetails;