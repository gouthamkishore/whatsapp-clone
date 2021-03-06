import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

import { useState } from "react"
function App() {

  return (
    <div className="app">
      <div className="app__body">

        {/*Sidebar */}
        <Sidebar />
        {/*Chat Component */}
        <Chat />

      </div>
    </div>
  );
}

export default App;
