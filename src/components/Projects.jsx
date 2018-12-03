import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Projects = () => {
    return (
        <Row>
            <Col md={1}></Col>
            <Col className="projects" xs={12} md={10}>
                <div><b>Projects:</b></div>
            </Col>
            <Col md={1}></Col>
        </Row>
    )
}

export default Projects;