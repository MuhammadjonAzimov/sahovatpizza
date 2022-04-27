import { Route, Routes } from 'react-router-dom';

import './App.css';

import Bag from './Containers/Bag';
import Home from './Containers/Home';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bag' element={<Bag />} />
    </Routes>
  );
}

export default App;
