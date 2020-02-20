import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

// comment this lines when you dont want to auto run ReactDOM.render
// const el = document.getElementById('counter-app');
// ReactDOM.render(<Counter />, el);

/* uncomment this block to "defer" ReactDOM.render and expose it globaly */
window.ReactCounter = {
    mount: (props, container) => {
        ReactDOM.render(<Counter {...props}/>, container);
    },
    unmount: (container) => {
        ReactDOM.unmountComponentAtNode(container);
    }
}