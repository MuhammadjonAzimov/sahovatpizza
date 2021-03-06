import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Bag from './Containers/Bag';
import Home from './Containers/Home';
import Authorization from './Containers/Authorization'

function App() {

  const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bag")) || [])

  const addtobag = (data) => {
    setBag([...bag, data]);
    localStorage.setItem("bag", JSON.stringify([...bag, data]))
  }

  const deleteproduct = (id) => {
    localStorage.removeItem("bag")
  }

  console.log(bag)

  return (
    <Routes>
      <Route path='/' element={<Home bag={bag} addtobag={addtobag} />} />
      <Route path='/bag' element={<Bag bag={bag} deleteproduct={deleteproduct} addtobag={addtobag} />} />
      <Route path='/authorization' element={<Authorization />} />
    </Routes>
  );
}

export default App;
