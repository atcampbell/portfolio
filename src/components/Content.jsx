import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Project from './Project';
import Projects from './Projects';
import Header from './Header';

class Content extends Component {
    render() {
        const data = this.props.data;

        return (
            <Grid fluid={true}>
                <Header />
                <Projects />
                {data.workItems.map((work, i) => (
                    <Project key={i} work={work} />
                ))}
                <Row style={{ paddingTop: '30vh' }}></Row>
            </Grid>
        )
    }
}

export default Content;