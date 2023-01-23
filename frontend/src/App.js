import './App.css';
import Nav from './components/Nav';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import Youtube from './components/Youtube';

const LayOut = () => {
  return (
    <div>
      <Nav />
      
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<MainPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='video' element={<Youtube />} />
          <Route path='/search/video' element={<Youtube />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
