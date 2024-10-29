import { useEffect } from 'react';
import { useLocation, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/navigation/navbar/Navbar';
import Footer from './components/navigation/footer/Footer';
import JsontoCsv from './pages/JsontoCsv';
import JsonFormator from './pages/JsonFormator';
import SignIn from './pages/SignIn';

function App() {
  const location = useLocation();



  return (
    <>
     <Navbar/>

      <div className="pb-[20px] px-2 sm:px-[50px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/json-to-csv" element={<JsontoCsv />} />
          <Route path="/json-formator" element={<JsonFormator />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
