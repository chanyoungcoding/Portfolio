import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import { Suspense, lazy } from 'react';

const Portfolio = lazy(() => import('./pages/Home'));
const Project = lazy(() => import('./pages/Project'));
const Declaration = lazy(() => import('./pages/Declaration'));
const CoffeeProject = lazy(() => import('./pages/Project/IntroduceProject/CoffeeProject'));
const EpetProject = lazy(() => import('./pages/Project/IntroduceProject/EpetProject'));

function App() {
  // 라우터 기능 추가
  return (
    <Suspense fallback={<div>Loading...</div>} >
      <div className='main'>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/declaration' element={<Declaration/>}/>
          <Route path='/coffeeproject' element={<CoffeeProject/>}/>
          <Route path='/epetproject' element={<EpetProject/>}/>
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;