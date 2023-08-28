import './App.css';
import { CategoriesView } from './components/CategoriesView';
import { CategoriesView2 } from './components/CategoriesView2';

function App() {
  const Categories = [" 和食"," 洋食"," 中華"," yamashita特製料理"]
  return (
    <div className="App">
      {/* パターン1 */}
      <div className="container">
     <span>パターン１</span><CategoriesView data={Categories} />
     </div>
     {/* パターン２ */}
     <div className="container">
      <span>パターン２</span><CategoriesView2 data={Categories} />
     </div>
    </div>
  );
}

export default App;
