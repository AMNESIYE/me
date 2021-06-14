import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

export class CNavigation extends Component {

    render() {
        return (
            <nav className="nav-bar">
                <ul className="nav-sub">
                    <li><a href="/">Bomberman</a></li>
                </ul>
            </nav>
        )
    }
}