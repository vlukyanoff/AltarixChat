import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { db } from './firebase.js';

const messagesRef = db.ref('messages');

messagesRef.on('value', function(snapshot) {
    console.log(snapshot.val());
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
