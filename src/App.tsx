import './App.css';
import AddTask from './components/AddTask';
import Counter from './components/counter/Counter';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Counter />
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
