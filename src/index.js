import React from 'react';
import ReactDOM from 'react-dom';
import App from './Comps/App';
import GlobalStyle from './StyleComp/GlobelStyle';

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);
