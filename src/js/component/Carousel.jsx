import React from 'react'
import PropTypes from "prop-types";

//components
import CardCharacters from "../component/CardCharacters.jsx";
import CardPlanets from "../component/CardPlanets.jsx";

const Carousel = ({ title, items }) => {
    return (
        <>
            <div className="div-title-people">
                <h2>{title}</h2>
            </div>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="row flex-row flex-nowrap carouselWrap">
                    {title === "Characters"
                        ? items.map((character) => {
                            return (
                                <CardCharacters
                                    key={`character-${character._id}`}
                                    character={character}
                                />
                            );
                        })
                        : title === "Planets"
                            ? items.map((character) => {
                                return (
                                    <CardPlanets
                                        key={`${title}-${character._id}`}
                                        character={character}
                                    />
                                );
                            })
                            : null}
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