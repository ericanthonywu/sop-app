import React, { Component } from 'react';

export default class Operational extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="operational">
                <div className="prelative container">
                    <div className="py-3"></div>
                    {/*<div className="py-5"></div>*/}
                    <div className="boxed-sec1 py-5 my-5">
                        <div className="row">
                            <div className="col-md-2 my-auto mx-auto text-center">
                                <p>Operational Activities</p>
                            </div>
                            <div className="col-md-8 my-auto mx-auto text-center">
                                <div className="row">
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="row">
                                            <div className="col-md-12 my-auto mx-auto text-center">
                                                <div className="box-inner">
                                                    <a className="btn" href="#">Route Management</a>
                                                </div>
                                            </div>
                                            <div className="col-md-12 my-auto mx-auto text-center">
                                                <div className="box-inner">
                                                    <a className="btn" href="#">Customer Information</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="row">
                                            <div className="col-md-12 my-auto mx-auto text-center">
                                                <div className="box-inner">
                                                    <a className="btn" href="#">Field Force Management</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="row">
                                            <div className="col-md-12 my-auto mx-auto text-center">
                                                <div className="box-inner">
                                                    <a className="btn" href="#">Route Management</a>
                                                </div>
                                            </div>
                                            <div className="col-md-12 my-auto mx-auto text-center">
                                                <div className="box-inner">
                                                    <a className="btn" href="#">Customer Information</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 my-auto mx-auto text-center">
                                <p>Operational Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
