import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import FadeShow from './SlideShow/SlideShow';
import Main from './Main/Main';
import About from './About/About';
import Contact from './Contact/Contact';

import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';

const GlobalReset = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: 300;
    }
`;


const App = () => (
    <>
        <GlobalReset />
        <Header />
        <FadeShow />
        <Main />
        <About />
        <Contact />
    </>
);

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);