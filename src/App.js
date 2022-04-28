import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Bag from './Containers/Bag';
import Home from './Containers/Home';


function App() {

  const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bag")) || [])

  const addtobag = (data) => {
    setBag([...bag, data]);
    localStorage.setItem("bag", JSON.stringify([...bag, data]))
  }

  return (
    <Routes>
      <Route path='/' element={<Home addtobag={addtobag} />} />
      <Route path='/bag' element={<Bag bag={bag} />} />
    </Routes>
  );
}

export default App;
