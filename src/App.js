import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import {RandomNumberProvider} from './contexts/randomNumber';


function App() {
  
  return (
    <div className='main'>
      <RandomNumberProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/portfolio' element={<Portfolio/>} />
        </Routes>
      </RandomNumberProvider>
    </div>
  );
}

export default App;
