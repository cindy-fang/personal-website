import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import headerImg from "../assets/img/me.png";
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Dev", "New Grad", "Community Leader", "Student Advocate"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(100);
        }
    }
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={7} md={6} xl={7}>
                        <span className="tagline">Hello World 🌎</span>
                        <h1>{`I'm Cindy 🙋🏻 ` } <br /><span className="wrap">{text}</span> </h1>
                        <p>I am a 5th year Computer Science student at TorontoMet University. I am very involved in both the student and tech communities, having co-chaired Canada's largest student-led conference with a team of 40+ members! I also enjoy participating at hackathons, where I can meet new hackers and create cool projects in a fun space. Fun fact about me is that I'm quite interested in Economics, and I just finished all my requirements for a minor at TMU. I am looking for 2024 Spring/Summer full time opportunities. Feel feel to connect or reach out!</p>
                        <button onClick={() => window.location.href = '#connect'}>Send a Message<ArrowRightCircle size={25}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs={4} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" class="image-fluid" />
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}

