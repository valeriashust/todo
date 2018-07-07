import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todos from './reducers'

const store = createStore(todos);


ReactDOM.render((<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
