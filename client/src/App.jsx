import {Route, Routes} from 'react-router-dom';
import { RandomNumberProvider } from './contexts/randomNumber';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Declaration from './pages/Declaration';

function App() {
  // 라우터 기능 추가
  return (
    <div className='main'>
      <RandomNumberProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/project' element={<Project />} />
          <Route path='/declaration' element={<Declaration />} />
        </Routes>
      </RandomNumberProvider>
    </div>
  );
}

export default App;