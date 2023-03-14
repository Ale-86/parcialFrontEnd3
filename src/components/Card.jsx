import React from "react";

const Card = ({ userName, genero, pelicula, selectRating }) => {
    return (
        <div>
            <h3>Nombre: {userName} </h3>
            <h3>Genero: {genero} </h3>
            <h3>Pelicula Favorita: {pelicula} </h3>
            <h3>Puntuación: {selectRating} </h3>
        </div>
    );
};

export default Card;