import React from "react";
import "charts.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../css/About.css"

const About = () => {
    const skills = {
        "NodeJS": 9,
        "Python": 7,
        "HTML/CSS": 9,
        "ReactJS": 8,
        "MongoDB": 8,
        "MySQL": 7,
        "Java": 5
    };

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
            <Row className="skills">
                <table class="charts-css bar show-labels show-heading show-data-axes show-primary-axis data-spacing-3">
                    <caption>Skills Overview</caption>
                    <tbody>
                        {Object.keys(skills).map((skill) => (
                            <tr>
                                <th scope="row">{skill}</th>
                                <td style={{ "--size": `calc( ${skills[skill]} / 10 )` }}>{skills[skill]}/10</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Row>
        </Container>
    )
}

export default About;