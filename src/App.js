import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">

      {/*Sidebar */}
      <Sidebar />
      {/*Chat Component */}
      <Chat />
    </div>
  );
}

export default App;
