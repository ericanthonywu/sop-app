import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MDBBtn } from "mdbreact";

export default class Activities extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="activities">
                <div className="prelative container">
                    <div className="py-3"></div>
                    {/*<div className="py-5"></div>*/}
                    <div className="boxed-sec1 py-4 my-2">
                        <div className="row">
                            <div className="col-md-2 my-auto mx-auto text-center">
                                <p>Control Activities</p>
                            </div>
                            <div className="col-md-8 my-auto mx-auto text-center">
                                <div className="row">
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">Supervisory Call</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">Stock Control</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">Cash Control</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 my-auto mx-auto text-center">
                                <p>Control Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
