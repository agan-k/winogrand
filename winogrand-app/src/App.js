import React, { Component } from 'react';
import Work from "./components/Work"
import Home from "./components/Home"
import About from "./components/About"
import Links from "./components/Links"
import axios from 'axios'
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom"
import './App.css';

class App extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        collection: []
                }
        }

        componentDidMount() {
                axios.get('https://aggregator-data.artic.edu/api/v1/artworks/search?q=winogrand&limit=9').then((response) => {
                        this.setState({
                                collection: response.data.data
                        })
                        console.log(response);
                })
        }
        render() {
                return (
                        <div className="App">
                               
                                        <div>
                                                <ul>
                                                        <li>
                                                                <Link to="/">Home</Link>
                                                        </li>
                                                        <li>
                                                                <Link to="/About">About</Link>
                                                        </li>
                                                        <li>
                                                                <Link to="/Work">Work</Link>
                                                        </li>
                                                        <li>
                                                                <Link to="/Links">Links</Link>
                                                        </li>
                                                </ul>
                                                <Switch>
                                                        <Route exact path="/">
                                                                <Home />
                                                        </Route>
                                                        <Route path="/About">
                                                                <About />
                                                        </Route>
                                                        <Route path="/Work">
                                                                <Work collection={this.state.collection} />
                                                        </Route>
                                                        <Route path="/Links">
                                                                <Links />
                                                        </Route>
                                                </Switch>
                                        </div>
                        </div>
                );
        }

}
export default App;
