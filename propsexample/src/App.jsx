import './App.css';
// Postsコンポーネントに格納してある場所を
import { Posts } from './components/Posts';

function App() {

  // Postsコンポーネントに送るデータ
  const PostData = "Postsコンポーネントに送られたデータです。"

  return (
    <div className="App">
        <div className="Post">
          <Posts post={PostData} />
        </div>
    </div>
  );
}

export default App;
