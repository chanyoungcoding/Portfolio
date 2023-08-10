import React from 'react';
import './declaration.css';
import TypeIt from "typeit-react";

const Index = () => {
  return (
    <div className='declaration__text'>
      <p className='red__text'>
        <TypeIt>
          <span className='violet__text'>import</span>
          &nbsp;&nbsp;time&nbsp;&nbsp;
          <span className='violet__text'>from</span>
          &nbsp;&nbsp;life<br/><br/>
          <span className='yellow__text'>time</span>
          <span className='blue__text'>heal</span>
          <span className='orange__text'>&#40;&nbsp;&#41;&nbsp;</span>
        </TypeIt>
      </p>
    </div>
  );
};

export default Index;