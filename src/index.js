import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './03 services/Reducers/RootReducer';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

