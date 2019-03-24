import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import TextTyper from './TextTyper';
import '../main.css';


function App() {
  const text = [
    'Krzysztof here is an explanation why I should be the part of CodersLab IT team:',
    'I did this component by myself and',
    'I spent 3 days almost 24 hours to accomplish it.',
    'It isnt perfect but I put all my heart into it,',
    'and, honestly, I promise to put it into every task you will hopefully give me in my future intership!',
  ];


  return (<TextTyper delay={800} interval={100} content={text} />
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
});
