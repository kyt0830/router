import logo from './logo.svg';
import './App.css';




const Contect = () => {
  return (
    <div className="App">
      <h2>Contect</h2>
      <p>Contect ...</p>
    </div>
  );
}

const Task = () => {
  return (
    <div className="App">
      <h2>Task</h2>
      <p>Task ...</p>
    </div>
  );
}


const Home = () => {
  return (
    <div className="App">
      <h2>Home</h2>
      <p>home ...</p>
    </div>
  );
}


const App = () => {
  return (
    <div className="App">
      <h2>react router dom</h2>
      <Home />
      <Task />
      <Contect />
    </div>
  );
}


export default App;
