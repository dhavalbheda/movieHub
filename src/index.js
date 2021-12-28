import React, { Fragment } from 'react';
import {render} from 'react-dom';
import App from './App';
import 'normalize.css';
import {GlobalStyles} from './global-styles'


render(<Fragment>
    <GlobalStyles />
      <App />
  </Fragment>,
  document.getElementById('root')
);
