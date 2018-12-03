import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SmoothCollapse from 'react-smooth-collapse';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewDescription: false
        }
    }

    handleClick() {
        this.setState({ viewDescription: !this.state.viewDescription });
    }

    render() {
        const { viewDescription } = this.state;
        const { work } = this.props;

        return (
            <React.Fragment>
                <Row>
                    <Col md={1}></Col>
                    <Col className="work-heading" xs={12} md={10}>
                        <div className="work-heading-text" onClick={() => this.handleClick()}>{work.title}</div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <SmoothCollapse expanded={viewDescription} heightTransition=".5s ease" eagerRender={true}>
                    <Row>
                        <Col md={2}></Col>
                        <Col xs={12} md={4}>
                            <img className="work-image" src={process.env.PUBLIC_URL + work.image} />
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="work-text">{work.description}</div>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </SmoothCollapse>
            </React.Fragment>
        )
    }
}

export default Project;