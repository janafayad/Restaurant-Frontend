import React from 'react';
import {useSelector} from 'react-redux';

import {Jumbotron} from 'react-bootstrap';

export default function Welcome() {
    return (
        <Jumbotron className="bg-light text-dark">
            <h1>Welcome To Restomato</h1>
            <blockquote className="blockquotes mb-0">
                <p>
                    This is a simple application
                    to let you know more about our restaurants.
                    Hope you enjoy it!
                </p>
            </blockquote>
        </Jumbotron>
        );
}
