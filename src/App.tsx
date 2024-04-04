import React from 'react';
import './App.css';
import Header from './Components/Header';

type Props = {}

const App: React.FC = (props: Props) => {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App
