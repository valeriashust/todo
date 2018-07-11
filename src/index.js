import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './components/registerServiceWorker';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';
import todoApp from './reducers/reducers';
import persistState from 'redux-localstorage';


const enhancer = compose (persistState());
const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),enhancer,
);


ReactDOM.render((<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
