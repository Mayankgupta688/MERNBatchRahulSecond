import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HelpPage from "./HelpPage";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

export default function MainPage() {
    return (
        <BrowserRouter>
            <h1>This is the Application Header</h1>
            <h2>Welcome to my Application</h2>

            <nav>
                <Link style={{marginRight: "10px"}} to="/">Home</Link>
                <Link style={{marginRight: "10px"}} to="/help">Help</Link>
                <Link style={{marginRight: "10px"}} to="/about">About</Link><br/><br/>

                <a style={{marginRight: "10px"}} href="/">Home</a>
                <a style={{marginRight: "10px"}} href="/help">Help</a>
                <a style={{marginRight: "10px"}} href="/about">About</a>
            </nav>

            <Route exact path="/"component={HomePage}></Route>
            <Route exact path="/help" component={HelpPage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>

            <footer>This is the Footer</footer>
        </BrowserRouter>
    )
}