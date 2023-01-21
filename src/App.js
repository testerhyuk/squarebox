import './App.css';
import Nav from './components/Nav';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
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
          <Route path=':movieID' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
        <Route path='/video' element={<Youtube />} />
      </Routes>

    </div>
  );
}

export default App;
