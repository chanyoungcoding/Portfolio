import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <div className='main'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default App;
