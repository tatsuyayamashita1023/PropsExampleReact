import './App.css';
import { View } from './components/View';

function App() {

  const anime =[
    {title:"呪術廻戦",category:"ダーク・ファンタジー",comment:"五条悟カッコいい・・"},
    {title:"東京リベンジャーズ",category:"",comment:"日和っている奴いる？いねえよなぁ！!?"}
  ]
  
  return (
    <div className="App">
      <View anime={anime} />
    </div>
  );
}

export default App;
