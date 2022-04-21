import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Nav from '../src/Components/Nav'


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
