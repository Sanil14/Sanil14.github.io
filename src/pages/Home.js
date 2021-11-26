import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Typewriter from 'typewriter-effect';
import "../css/Home.css"

const Home = () => {
    return (
        <Container>
            <Row className="center title wow fadeIn">
                <h3>Hey, I'm <span className="warning">Sanil Jalan</span></h3>
            </Row>
            <Row className="center typewriter">
                <h1>
                    <Typewriter
                        options={{
                            strings: ["Aspiring Web Developer", "Aspiring NodeJS Developer", "Aspiring Backend Developer", "Aspiring Software Engineer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </Row>
        </Container>
    )
}

export default Home;