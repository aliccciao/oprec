import Feed from './main/Feed';
import Tweet from './main/TweetCard';
import Create from './main/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Feed />}></Route>
          <Route exact path='tweet/' element={< Tweet />}></Route>
          <Route exact path='create/' element={< Create />}></Route>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
