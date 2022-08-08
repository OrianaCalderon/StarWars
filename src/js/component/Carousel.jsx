import React from 'react'
import PropTypes from "prop-types";

//components
import CardCharacters from './CardCharacters.jsx';
import CardPlanets from './CardPlanets.jsx';

const Carousel = ({ title, items}) => {
    return (
        <>

            <div className="div-title-people">
                <h2>{title}</h2>
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="row flex-row flex-nowrap carouselWrap">
    
                    
                    {
                        title === "People" ?
                        items.map((character) => {
                            return (
                                <CardCharacters key={`character-${character._id}`} character={character} />
                            )
                        })
                        :
                        items.map((character)=>{
                            return(
                                <CardPlanets key={`character-${character._id}`} character={character} />
                            )
                        })

                    }
                </div>
            </div>

        </>

    )
}

Carousel.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array

}

export default Carousel;