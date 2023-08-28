import './App.css';
import { Posts } from './components/Posts';

function App() {
  const id = 1 
  const username= "yamashita"
  const age = 23
  return (
    <div className="App">
      <div className="Post">
        <Posts id={id} name={username} age={age}  />
      </div>
    </div>
  );
}

export default App;
