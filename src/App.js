import React from 'react';
import TextTyper from './TextTyper';
import './App.css';

function App() {
  const text = 
    'This is The Text Typer component. It was made to practice Jest and Enzyme testing. It a simply small component to type the text you wish.';

  return (<TextTyper delay={0} interval={100} content={text} />
  );
}

export default App;
