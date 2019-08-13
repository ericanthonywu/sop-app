import React, { Component } from 'react';

export default class Support extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="support">
                <div className="prelative container">
                    <div className="py-3"></div>
                    {/*<div className="py-5"></div>*/}
                    <div className="boxed-sec1 py-4 my-2">
                        <div className="row">
                            <div className="col-md-2 my-auto mx-auto text-center">
                                <p>Support Activities</p>
                            </div>
                            <div className="col-md-8 my-auto mx-auto text-center">
                                <div className="row">
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">ITC & RM</a>
                                        </div>
                                    </div>

                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">Employee</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">Fleet Management</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">EHS</a>
                                        </div>
                                    </div>

                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">Security</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-auto mx-auto text-center">
                                        <div className="box-inner">
                                            <a className="btn" href="#">Facility</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 my-auto mx-auto text-center">
                                <p>Support Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5"></div>
            </div>
        )
    }
}
