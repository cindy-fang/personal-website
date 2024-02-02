import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import cscu1 from "../assets/img/cscu1.JPG";
import cscu2 from "../assets/img/cscu2.JPG";
import cscu3 from "../assets/img/cscu3.JPG";
import cscu4 from "../assets/img/cscu4.jpg";
import cscu5 from "../assets/img/cscu5.JPG";
import cscu7 from "../assets/img/cscu7.JPG";
import cscu8 from "../assets/img/cscu8.JPG";

import cutc1 from "../assets/img/cutc1.JPG";
import cutc2 from "../assets/img/cutc2.JPEG";

import ibm from "../assets/img/ibm.jpg";

import pilot from "../assets/img/pilot.JPG";
import hackmit from "../assets/img/hackmit.jpg";


import verto from "../assets/img/verto.jpg";
import bell1 from "../assets/img/bell1.jpg";
import tecsys1 from "../assets/img/tecsys2.jpg";


export const Projects = () => {
    const projects = [
        {
            title: "PilotASD",
            description: "TBA",
            imgUrl: pilot,
        },
        {
            title: "Face Identification & Recognition",
            description: "",
            imgUrl: projImg3,
        },
        {
            title: "Medlingua",
            description: "",
            imgUrl: hackmit,
        },
        {
            title: "Music Genre Classification",
            description: "Python",
            imgUrl: projImg3,
        },
        {
            title: "Inventory Tracker",
            description: "",
            imgUrl: projImg1,
        },
        {
            title: "Financial Literacy Helper",
            description: "",
            imgUrl: projImg2,
        },
    ];

    const volunteering = [
        {
            title: "President",
            description: "Computer Science Course Union",
            imgUrl: cscu8,
        },
        {
            title: "Co-Chair",
            description: "Canadian Undergrad Tech Conference",
            imgUrl: cutc1,
        },
        {
            title: "VP Operations",
            description: "Computer Science Course Union",
            imgUrl: cscu3,
        },
        {
            title: "VP Careers & Co-op",
            description: "Computer Science Course Union",
            imgUrl: cscu5,
        },
        {
            title: "Marketing Lead",
            description: "IBM Z",
            imgUrl: ibm,
        },
        {
            title: "2nd Year Rep",
            description: "Computer Science Course Union",
            imgUrl: cscu2,
        },
        {
            title: "1st Year Rep",
            description: "Computer Science Course Union",
            imgUrl: cscu7,
        },
    ];

    const work = [
        {
            title: "Backend Dev Intern",
            description: "Tecsys",
            imgUrl: tecsys1,
        },
        {
            title: "Site Reliability Intern",
            description: "Verto Health",
            imgUrl: verto,
        },
        {
            title: "Software Dev Intern",
            description: "Bell",
            imgUrl: bell1,
        },
        {
            title: "Network Intern",
            description: "Bell",
            imgUrl: projImg1,
        },
        {
            title: "Student Intern",
            description: "EFI",
            imgUrl: projImg2,
        },
    ];

    return (
        <section className="project" id="projects">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Experience</h2>
                    <p>Throughout my uni years, I was actively doing internships at various companies, while being involved in school and the tech community!</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Work Experiences</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Volunteering</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                            work.map((work, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...work}
                                    />
                                )
                            })
                            }
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                            projects.map((projects, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...projects}
                                    />
                                )
                            })
                            }
                        </Row>                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            {
                            volunteering.map((volunteering, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...volunteering}
                                    />
                                )
                            })
                            }
                        </Row>                        
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
    }