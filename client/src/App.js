import {Route, Routes} from 'react-router-dom';
import { RandomNumberProvider } from './contexts/randomNumber';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/project';


function App() {
  
  return (
    <div className='main'>
      <RandomNumberProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/project' element={<Project/>} />
        </Routes>
      </RandomNumberProvider>
    </div>
  );
}

export default App;
