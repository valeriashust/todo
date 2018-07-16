import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Form from '../containers/Form'
import HomeWithSpinner from "../containers/HomeWithSpinner";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomeWithSpinner}/>
            <Route path='/add' component={Form}/>
        </Switch>
    </main>
);

export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
};



