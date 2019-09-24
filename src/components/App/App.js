import React, { Component } from "react";
import "./App.css";

import GuessCount from "../GuessCount/GuessCount";

class App extends Component {
    constructor() {
        super();
        this.state = {
            guesses: 0
        };
    }
    render() {
        const { guesses } = this.state;
        return (
            <div className="container flex-centered">
                <h1>Jeu du pendu - React</h1>
                <GuessCount guesses={guesses} />
            </div>
        );
    }
}

export default App;
