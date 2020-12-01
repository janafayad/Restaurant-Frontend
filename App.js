import React from 'react';
import './App.css';
import axios from 'axios';

import {Container , Row , Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

export default function App() {
    const marginTop = {
        marginTop:"20px"
    };


  return (
    <Router>
        <NavigationBar/>
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route path="/" exact component={Welcome}/>
                        <Route path="/Welcome" exact component={Welcome}/>
                        <Route path="/Page1" exact component={Page1} />
                        <Route path="/Page2" exact component={Page2} />

                    </Switch>
                </Col>
            </Row>
        </Container>
    </Router>
  );
}

