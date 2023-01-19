import './App.css';
//import StatefulGreeting from './components/StatefulGreeting';
//import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState/>

    </div>
  );
}

export default App;
