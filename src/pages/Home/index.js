import React from 'react';
import './home.css';
import Rhombus from '../../components/Rhombus';
import Navbar from '../../components/Navbar';

const index = () => {

  return (
    <div className="Home">
      {/* 바 부분 */}
      <Navbar/>
      {/* 큐브 박스 */}
      <div className="Home__main">
        <div className="Home__h1">
          <h1>
            Hello THIS IS MY PortFolio <br />
            Web Site bro!!
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

export default index;