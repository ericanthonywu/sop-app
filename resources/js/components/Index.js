import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Layout/Header';
import Activities from "./Layout/Activities";
import Support from "./Layout/Support";
import Operational from "./Layout/Operational";

class Index extends Component {//jancok pusing wkwk
    render() {
        return (
            <div>
                <Header />
                <Activities />
                <Operational />
                <Support />
            </div>
        )
    }

    constructor(props) {
        super(props);

    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
