import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import initialState from './data';
import { createStore } from 'redux';
import RootReducer from './Reducers/index';





const store = createStore(RootReducer, initialState);

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
