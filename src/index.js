import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './components/registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers/reducers'

const store = createStore(todoApp);


ReactDOM.render((<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
