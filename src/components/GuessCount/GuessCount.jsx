import React from "react";

const GuessCount = ({ guesses }) => (
    <div className="alert alert-info">
        Nombre de tentatives : {guesses} / 10
    </div>
);

export default GuessCount;
