import React from 'react';
import './App.css';
import AddMovie from "./component/AddMovie";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
        <Nav/>
      <AddMovie/>
    </div>
  );
}

export default App;
