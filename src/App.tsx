import './App.css';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';
// import { Test } from './Test';

function App() {
  return (
    <div className="App">
      <AddTask />
      {/* <Test /> */}
      <Tasks />
    </div>
  );
}

export default App;
