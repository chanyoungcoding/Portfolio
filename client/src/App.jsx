import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Declaration from './pages/Declaration';
import CoffeeProject from './pages/IntroduceProject/CoffeeProject';
import EpetProject from './pages/IntroduceProject/EpetProject';
import Test from './pages/IntroduceProject/Test';

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
          <Route path='/test' element={<Test/>}/>
        </Routes>
    </div>
  );
}

export default App;