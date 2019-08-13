import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="header">
                <div className="prelative container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="lang">
                                <ul>
                                    <li>English&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                                    <li>Indonesia</li>
                                </ul>
                            </div>
                            <div className="title">
                                <h3>SOP - APP</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="logo">
                                <img src="https://via.placeholder.com/180x70.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


