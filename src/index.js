import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import DevTools from './containers/DevTools.js';


const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	DevTools.instrument()
);


ReactDOM.render(
<Provider store={store}>
  <div>
    <App />
    <DevTools />
  </div>
</Provider>,
  document.getElementById('root')
);
