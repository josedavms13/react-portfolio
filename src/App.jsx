import React, {useState} from 'react'
import './App.css'
import {HashRouter as Router, Route, Redirect, Switch, useParams} from "react-router-dom";
import Assistant from "./views/components/Assistant";
import Welcome from "./views/Welcome";
import {useSelector} from "react-redux";
import LandingManager from "./views/LandingManager";
import UserRegister from "./views/UserRegister";


function App() {
    const language = useSelector(state => state.languageReducer);


    return (
        <div className="App">
            <Assistant/>
            <Router>
                <Switch>

                    <Route path={'/welcome'}>
                        <Welcome lang={language} />
                    </Route>
                    <Route exact path={'/landing/:language'}>
                        <LandingManager />
                    </Route>

                    <Route path={'/register'}>
                        <UserRegister />
                    </Route>



                </Switch>
            </Router>
        </div>
    )
}

export default App
