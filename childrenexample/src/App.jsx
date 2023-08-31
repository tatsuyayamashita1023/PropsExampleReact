
import './App.css';
import { Children } from './components/Children';

function App() {
  return (
    <div className="App">
      <span>私はApp.jsxだ</span>
      <Children>
        {/* 下記のソースはChildrenコンポーネントとなる */}
        <span>私はChildrenコンポーネント</span>
      </Children>
    </div>
  );
}

export default App;
