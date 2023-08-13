/* 
마우스 위치에 따라 css 적용 ,
프로젝트의 포트폴리오 박스 부분
*/

import { useState } from 'react';
import './ProjectBox.css'

export default function ProjectBox({num, introduce = "I'm working on it", secondIntro = "I'm working..", main = "Chan coding", date = "1998-06-04", url = "/portfolio"}) {
  const [hoveredStates, setHoveredStates] = useState(false);

  const handleHover = (isHovered) => {
    const updatedStates = isHovered;
    setHoveredStates(updatedStates);
  };


  return (
    <>
        <a className='box__a' href={url}>
          <div className='box'
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <div className='box__center'></div>
            <div className='box__center2'></div>
            <div className='box__center3'></div>
            <div className={`box__out ${hoveredStates ? `hovered__${num}` : `hovered__back__${num}`}`}>
            <p>{introduce}</p>
            <p>/</p>
            <p>{ secondIntro }</p>
            <h1>{main}</h1>
            <p className='box__date'>{ date }</p>
            </div>
          
          </div>
        </a>
    </>
  )
}