import './App.css';
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home';
import Update from './pages/Update';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/update' element={<Update />}/>
      </Routes>
    </>
  );
}

export default App;
