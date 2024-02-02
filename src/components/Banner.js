import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import headerImg from "../assets/img/me.png";
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "New Grad", "and...", "wait for it...", "...", "a", "long boi."];
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
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hello World :D</span>
                        <h1>{`Hi I'm Cindy, ` } <br /><span className="wrap">{text}</span> </h1>
                        <p>I am a 5th year CompSci co-op major at TorontoMet University! I have completed 5 swd internships, with experience in softdev and devops. I have also particpated in various hackathons such as HackMIT, HackHarvard, UoftHacks, and more. I am looking for 2024 Spring/Summer full time opportunities. Feel feel to connect or reach out!</p>
                        <button onClick={() => window.location.href = '#skills'}>Read more<ArrowRightCircle size={25}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container> 

        </section>
    )
}

