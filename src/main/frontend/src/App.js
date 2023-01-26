import './App.css';
import Nav from './components/Nav';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import Youtube from './components/Youtube';
import LoginPage from './pages/RegisterLoginPage/LoginPage';
import RegisterPage from './pages/RegisterLoginPage/RegisterPage';
import { useState } from 'react';

const LayOut = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}
const auth = true;
function App(props) {
  const [auth, setAuth] = useState(false);

  if (auth) {
    return (
      <div className="App">
        <Routes>
          <Route path='/browse' element={<LayOut />} >
            <Route index element={<MainPage />} />
            <Route path='/browse/search' element={<SearchPage />} />
            <Route path='/browse/video' element={<Youtube />} />
            <Route path='/browse/search/video' element={<Youtube />} />
          </Route>
        </Routes>
      </div>
    );
  } else {
    return(
      <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage setAuth={setAuth} />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
     </div>
    )
  }
}

export default App;
