
import './App.css';
import { Card } from './components/Card';
import { Card2 } from './components/Card2';

function App() {

  return (
    <div className="App">
      <Card title="about" comment="今回は`about`が入りました" className="Card" />
      <Card title="自己紹介" comment="今回は`自己紹介`が入りました。2023年に新卒として入社。今はReact、NextJsをお勉強中。"  />
      <Card2 title="スタイル適応あり" comment="styleを入れたい場合は子コンポーネントに渡すことでできる" className="Card" />
    </div>
  );
}

export default App;
