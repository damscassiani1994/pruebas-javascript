import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
