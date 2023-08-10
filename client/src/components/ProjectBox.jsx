import { useState } from 'react';

export default function ProjectBox({num}) {

  const [hoveredStates, setHoveredStates] = useState(false);

  const handleHover = (isHovered) => {
    const updatedStates = isHovered;
    setHoveredStates(updatedStates);
  };


  return (
    <>
        <a href='/portfolio'>
          <div className='box'
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
          <div className={`box__out ${hoveredStates ? `hovered__${num}` : `hovered__back__${num}`}`}></div>
          </div>
        </a>
    </>
  )
}