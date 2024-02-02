import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col} from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import snek from "../assets/img/snek.png";
import csharp from "../assets/img/csharp.png";
import react from "../assets/img/react.png";
import db from "../assets/img/db.png";
import node from "../assets/img/node.png";
import html from "../assets/img/html.png";
import shell from "../assets/img/shell.png";
import git from "../assets/img/git.png";
import docker from "../assets/img/docker.png";
import agile from "../assets/img/agile.png";
import mcrsft from "../assets/img/mcrsft.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        }, 

        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        }, 

        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        }, 

        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Some of my techy skillz.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={snek} alt="Image"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={csharp} alt="Image"/>
                                    <h5>C# ASP.NET</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image"/>
                                    <h5>React :P</h5>
                                </div>
                                <div className="item">
                                    <img src={db} alt="Image"/>
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="Image"/>
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image"/>
                                    <h5>HTML & CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={shell} alt="Image"/>
                                    <h5>Shell Scripting</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image"/>
                                    <h5>Git & GitHub</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="Image"/>
                                    <h5>Docker & K8</h5>
                                </div>
                                <div className="item">
                                    <img src={agile} alt="Image"/>
                                    <h5>Agile & Scrum</h5>
                                </div>
                                <div className="item">
                                    <img src={mcrsft} alt="Image"/>
                                    <h5>Microsoft Azure</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}
