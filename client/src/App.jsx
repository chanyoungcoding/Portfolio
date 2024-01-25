import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Declaration from './pages/Declaration';
import CoffeeProject from './pages/Project/IntroduceProject/CoffeeProject';
import EpetProject from './pages/Project/IntroduceProject/EpetProject';

function App() {
  // 라우터 기능 추가
  return (
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
  );
}

export default App;