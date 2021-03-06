import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./pages/home/index"
import About from "./pages/about/index"
import Posts from "./pages/posts/index"
import Tags from "./pages/tags/index"
import Admin from "./pages/admin/index"
import Todos from "./pages/todos/index"

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <hr/>
                <div className="copyright">©
                    <a href={"http://blog.haowei.ch"}>ChangHaoWei</a> 2018 | <a
                        href={"https://github.com/chaaang"}>Github</a>
                </div>
            </footer>
        );
    }
}

class Menu extends Component {
    render() {
        return (
            <nav className="menu">
                <input id="menu-check" type="checkbox"/>
                <label id="menu-label" htmlFor="menu-check" className="unselectable">
                    <span className="icon close-icon">✕</span>
                    <span className="icon open-icon">☰</span>
                    <span className="text">Menu</span>
                </label>
                <ul>
                    <li><a href="/posts">文章集</a></li>
                    <li><a href="/todo">待做项</a></li>
                    <li><a href="/about">技术栈</a></li>
                </ul>
            </nav>
        );
    }
}

class App extends Component {
    render() {
        const site_name = "好为";
        const site_description = "Try harder than yesterday, Maybe I would get lucky today ：）";
        return (
            <div className="home">
                <header className="masthead">
                    <h1><a href="/">{site_name}</a></h1>
                    <p className="tagline">{site_description}</p>
                    <Menu/>
                </header>

                <Router>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/todo" component={Todos}/>
                        <Route path="/about" component={About}/>
                        <Route path="/tags" component={Tags}/>
                        <Route path="/admin" component={Admin}/>

                        <Footer/>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
