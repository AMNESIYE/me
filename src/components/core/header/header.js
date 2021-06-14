import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import './header.scss';
import {CNavigation} from "./c-nav/c-nav";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAboutMenu: false
        };
    }

    handleHover = (event) => {
        this.setState({showAboutMenu: true});
    };

    handleLeave = (event) => {
        this.setState({showAboutMenu: false});
    };

    render() {
        let c = 'c-lang';
        let cSharp = 'c-sharp-lang';
        let java = 'java-lang';
        let javascript = 'javascript-lang';
        let typescript = 'typescript-lang';
        let php = 'php-lang';
        let golang = 'golang-lang';

        return (
            <div class="header">
                <nav class="nav-bar">
                    <ul class="nav-sub">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
                <nav className="nav-bar">
                    <ul className="nav-sub">
                        <li onMouseLeave={this.handleLeave}><Link to="/" onMouseEnter={this.handleHover}>C</Link></li>
                        <li onMouseLeave={this.handleLeave}><Link to="/" onMouseEnter={this.handleHover}>C#</Link></li>
                        <li onMouseLeave={this.handleLeave}><Link to="/" onMouseEnter={this.handleHover}>JAVA</Link></li>
                        <li onMouseLeave={this.handleLeave}><Link to="/" onMouseEnter={this.handleHover}>Javascript</Link></li>
                        <li onMouseLeave={this.handleLeave}><Link to="/" onMouseEnter={this.handleHover}>Typescript</Link></li>
                        <li onMouseLeave={this.handleLeave}><Link to="/" onMouseEnter={this.handleHover}>PHP</Link></li>
                        <li onMouseLeave={this.handleLeave}><Link to="/" onMouseEnter={this.handleHover}>GOLANG</Link></li>
                    </ul>
                </nav>
                {this.state.showAboutMenu && <CNavigation/>}
            </div>
        )
    }

}