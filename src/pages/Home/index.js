import React,{useContext} from 'react';
import './home.css';
import Rhombus from '../../components/Rhombus';
import Navbar from '../../components/Navbar';
import {RandomNumberContext} from '../../contexts/randomNumber';

const Index = () => {

  const {randomNumber, wiseSaying} = useContext(RandomNumberContext);
  console.log(randomNumber, wiseSaying)
  return (
    <div className="Home">
      {/* 바 부분 */}
      <Navbar/>
      {/* 큐브 박스 */}
      <div className="Home__main">
        <div className="Home__h1">
          <h1>
            {wiseSaying[randomNumber]}
          </h1>
        </div>

        <div className="container">
          <Rhombus num={0} />
          <Rhombus num={1} />
          <Rhombus num={2} />
        </div>
      </div>
    </div>
  );
};

export default Index;