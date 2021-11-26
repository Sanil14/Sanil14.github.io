import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../css/About.css"

const About = () => {
    return (
        <Container>
            <Row className="center title">
                <h3>About <span className="warning">Me</span></h3>
            </Row>
            <div className="center subtitle">
                <p>
                    I'm a student at <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noreferrer">Cardiff University</a> set to graduate in 2024 with a degree in BSc Applied Software Engineering.
                </p>
                <p>
                    I'm also the COO at <a href="https://fighttm.com/" target="_blank" rel="noreferrer">Fight™</a> - a startup that aims to provide smart recording software for gamers.
                </p>
            </div>
        </Container>
    )
}

export default About;