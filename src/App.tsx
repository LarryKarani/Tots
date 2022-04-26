import './App.css';
import Hero from './components/hero';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Description from './pages/description';
import Home from './pages/home';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Background from './components/Background';

function App() {
  const location = useLocation();
  // console.log(location)
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setEntered(false);
    } else {
      setEntered(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className='font-ibm-plex items-center flex justify-center flex-col '>
        <Background />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/description' element={<Description />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
