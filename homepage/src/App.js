import React, { Component } from 'react';
import {Route, Link, Routes, BrowserRouter, HashRouter } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import MyProjects from "./MyProjects";
import './clouds.css';
import './App.css';
class App extends Component {
    state = {
        data: null
      };
    
      componentDidMount() {
        this.callBackendAPI()
          .then(res => this.setState({ data: res.express }))
          .catch(err => console.log(err));
      }
        // fetching the GET route from the Express server which matches the GET route from server.js
      callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };
    
      render() {
    return (
        <div className="cloudPane">
            <div className="stars">
                <div className="star" id="star1"></div>
                <div className="star"></div>
                <div className="star" id="star2"></div>
                <div className="star"></div>
                <div className="star" id="star3"></div>
                <div className="star"></div>
                <div className="star" id="star4"></div>
                <div className="star"></div>
                <div className="star" id="star5"></div>
                <div className="star"></div>
                <div className="star" id="star6"></div>
                <div className="star"></div>
                <div className="star" id="star7"></div>
                <div className="star"></div>
                <div className="star" id="star8"></div>
                <div className="star"></div>
                <div className="star" id="star9"></div>
                <div className="star"></div>
                <div className="star" id="star10"></div>
                <div className="star"></div>
                <div className="star" id="star11"></div>
                <div className="star"></div>
            </div>

            <div className="bigCloud" id="cloud1">
                <div className="largeCircle" id="circ1">

                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>
            <div className="bigCloud" id="cloud2">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud3">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud4">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud5">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud6">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud7">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="App">
                <div className="Menu" style={{ width: "100vw", backgroundColor: "00ffff" }}>
 
               
                <HashRouter>
                        <Link to="/" style={{ color: 'white', fontSize: 20, marginRight: 30 }}>Home</Link>{' '}
                        <Link to="/About" style={{ color: 'white', fontSize: 20, marginRight: 30 }}>About me</Link>{' '}
                        <Link to="/MyProjects" style={{ color: 'white', fontSize: 20, marginRight: 30 }}>My Projects</Link>{' '}
                       
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/MyProjects" element={<MyProjects />} />
                        </Routes>
                   </HashRouter>

                </div>
            </div>
        </div>
    )
}
      }
export default App;
