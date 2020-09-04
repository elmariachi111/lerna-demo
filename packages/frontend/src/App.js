import React from 'react';
import { Person } from 'addressbook';
import './App.css';

function App() {
  const p = new Person("Stefan", "Adolf");
  p.birthYear = 1978;
  p.ethAddress = "0x1234"
  return (
    <div className="App ">
      <header className="App-header green">
       {p.fullName} is {' '}
       {p.age} and his address is {p.ethAddress}
      </header>
    </div>
  );
}

export default App;
