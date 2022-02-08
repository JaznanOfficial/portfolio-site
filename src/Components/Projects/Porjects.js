import React from "react";
import { Card, Col, Row,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Projects.css";
import first from './project-one.png'
import second from './project-two.png'
import third from './project-three.png'

const Porjects = () => {
    return (
        <div className="m-lg-5 m-sm-3">
            <section class="projects" id="projects">
                <div class="max-width">
                    <h2 class="title">My Projects</h2>
                    <h4 className="text-danger">- what I make Awesome -</h4>
                    <Row xs={1} md={3} className="g-2 justify-content-center align-items-center">
                        <div className="card project-card m-5" style={{ width: "18rem" }}>
                            
                                <img
                                    src={first}
                                    className="card-img-top project-div m-5"
                                    alt="..."
                                    height='750px'
                                    title="please click to see details"
                                />
                            <Button href='https://car-deal-project.web.app/' target='_blank' className='m-1' variant="outline-dark"><strong>Live Site Link</strong></Button>
                        <Button href='https://github.com/JaznanOfficial/car-deal-client-side' target='_blank' className='m-1' variant="outline-primary"> <strong>Client Side Code</strong> </Button>
                        <Button href='https://github.com/JaznanOfficial/car-deal-server-side' target='_blank' className='m-1' variant="outline-success"> <strong>Server Side Code</strong> </Button>
                        </div>
                        <div className="card m-5 project-card" style={{ width: "18rem" }}>
                
                                <img
                                    src={second}
                                    className="card-img-top project-div m-5"
                                    alt="..."
                                    height='750px'
                                    title="please click to see details"
                                />
                     
                            <Button href='https://travel-and-tour-assignment.web.app/' target='_blank' className='m-1' variant="outline-dark"><strong>Live Site Link</strong></Button>
                        <Button href='https://github.com/JaznanOfficial/tour-and-travel-client-side' target='_blank' className='m-1' variant="outline-primary"> <strong>Client Side Code</strong> </Button>
                        <Button href='https://github.com/JaznanOfficial/tour-and-travel-server-side' target='_blank' className='m-1' variant="outline-success"> <strong>Server Side Code</strong> </Button>
                        </div>
                        <div className="card m-5 project-card" style={{ width: "18rem" }}>
                
                                <img
                                    src={third}
                                    className="card-img-top project-div m-5"
                                    alt="..."
                                    height='750px'
                                    title="please click to see details"
                                />
                
                            <Button href='https://first-eschool-project.netlify.app/' target="_blank" className='m-1' variant="outline-dark"><strong>Live Site Link</strong></Button>
                        <Button href='https://github.com/JaznanOfficial/e-learning' target='_blank' className='m-1' variant="outline-primary"> <strong>Client Side Code</strong> </Button>
                        <Button className='m-1' variant="outline-success" disabled> <strong>Server Side Code</strong> </Button>
                        </div>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Porjects;
