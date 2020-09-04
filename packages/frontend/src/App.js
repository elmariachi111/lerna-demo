import React from 'react';
import { Person } from 'addressbook';
import './App.css';

function App() {
  const p = new Person("Stefan", "Adolf");
  p.birthYear = 1978;
  return (
    <div className="App">
      <header className="App-header">
       {p.fullName} is {' '}
       {p.age}
      </header>
    </div>
  );
}

export default App;
