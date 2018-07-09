import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import AddForm from '../containers/AddForm'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/add' component={AddForm}/>
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



