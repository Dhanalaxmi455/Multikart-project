import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Carousel from './Carousel';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Carousel />
  </Provider>
)