import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className='main'>
      <Routes>
        <Route index element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
