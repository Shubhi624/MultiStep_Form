import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import FirstPage from './first';
import SecondPage from './second';
import ThirdPage from './third';
import FourthPage from './fourth';
import FifthPage from './fifth';
import SixthPage from './sixth';
import SeventhPage from './seventh';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/step2" element={<SecondPage />} />
        <Route path="/step3" element={<ThirdPage />} />
        <Route path="/step4" element={<FourthPage />} />
        <Route path="/step5" element={<FifthPage />} />
        <Route path="/step6" element={<SixthPage />} />
        <Route path="/step7" element={<SeventhPage />} />
      </Routes>
    </Router>
  );
}

export default App;
