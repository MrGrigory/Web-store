import './App.css';
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Catalog from "./components/Catalog";
import Header from './components/Header';
import Drawer from './components/Drawer';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div className="wrapper clear">
                <div> 
                    <nav className="sticky_menu">
                        <ul>
                            <li><NavLink to="/">Catalog</NavLink></li>
                            <li><a href="/stuff">Stuff</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <Drawer/>
                    <Header/>
                    <div className="content">
                        <Route path="/" component={Catalog}/>

                    </div>
                </div>
            </div>
        </HashRouter>

    );
  }
}
 
export default Main;