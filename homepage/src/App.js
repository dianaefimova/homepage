import {Route, Link, Routes, BrowserRouter } from "react-router-dom"
import React from 'react';

import Home from "./Home";
import About from "./About";
import MyProjects from "./MyProjects";
import './clouds.css';
import './App.css';

function App() {
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
                    <BrowserRouter>

                        <Link to="/homepage/" style={{ color: 'white', fontSize: 20, marginRight: 30 }}>Home</Link>{' '}
                        <Link to="https://dianaefimova.github.io/About/" style={{ color: 'white', fontSize: 20, marginRight: 30 }}>About me</Link>{' '}
                        <Link to="/https://dianaefimova.github.io/MyProjects/" style={{ color: 'white', fontSize: 20, marginRight: 30 }}>My Projects</Link>{' '}
                       
                        <Routes>
                            <Route path="/homepage/" element={<Home />} />
                            <Route path="https://dianaefimova.github.io/About/" element={<About />} />
                            <Route path="https://dianaefimova.github.io/MyProjects/" element={<MyProjects />} />
                        </Routes>
                    </BrowserRouter>



                </div>
            </div>
        </div>
    )
}

export default App;
