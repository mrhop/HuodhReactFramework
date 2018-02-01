import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from '../../redux/index/store'

import './index.scss';
import  App from '../../containers/index/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
