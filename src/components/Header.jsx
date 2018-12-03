import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SmoothCollapse from 'react-smooth-collapse';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMore: false
        }
    }

    handleClick() {
        this.setState({ viewMore: !this.state.viewMore });
    }

    render() {
        const { viewMore } = this.state;

        return (
            <React.Fragment>
                <Row>
                    <Col md={1}></Col>
                    <Col className="header" xs={12} md={10}>
                        <div>Hello! I’m <b>Adam Campbell</b>, a <b>Full Stack Web Developer</b> from Glasgow.</div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <SmoothCollapse expanded={!viewMore} heightTransition=".5s ease">
                    <Row>
                        <Col md={1}></Col>
                        <Col xs={12} md={10}>
                            <div className="read-more" onClick={() => this.handleClick()}>Read More...</div>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </SmoothCollapse>
                <SmoothCollapse expanded={viewMore} heightTransition=".5s ease">
                    <Row>
                        <Col md={1}></Col>
                        <Col xs={12} md={10}>
                            <div className="header-description">I currently make RESTFul web applications for <a className="mylink" href="http://www.linn.co.uk"><b>Linn Products</b></a> using React, Redux, .NET Core, Docker and AWS. I enjoy working creatively with code and have a background as a musician and sound artist, where I have performed internationally and had work commissioned by the bodies like the <b>Goethe Institute</b> and the <b>BBC</b>. I also have a Master’s with Merit from the <b>University of Glasgow</b> in Information Technology, where my dissertation project was a real-time 3D simulation of a haptic user interface. I'm always on the lookout for interesting projects and collaborations.</div>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </SmoothCollapse>
                <Row>
                    <Col md={1}></Col>
                    <Col className="header-description" xs={12} md={10}>
                        Please check out some descriptions of my previous work below and don’t hesitate to <a className="mylink" href="mailto:adamtoddcampbell@gmail.com">get in touch!</a>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Header;