import React, { useRef, useState } from "react";
import './project.css';
import { motion } from 'framer-motion';
import ProjectBox from '../../components/ProjectBox';

const Project = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 1000}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: .8
      }}
      
      ref={containerRef}
      className="scrollable-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container__inner">
        <div className="content">
          <ProjectBox
            num={0}
            introduce="This is CoffeeSite"
            secondIntro="Use React, Node, MongoDB, TS..."
            main="Chans-Coffee"
            date="2023-11-20"
            url="/coffeeproject"
          />
          <ProjectBox num={1}/>
          <ProjectBox num={2} />
        </div>
        <div className="content__last">
          <ProjectBox 
            num={3}
            introduce="This is EpetProject"
            secondIntro="Use Tsx, Node, React-query..."
            main="E-pet"
            date="2023-12-24"
            url="/epetproject" 
          />
          <ProjectBox num={4} />
          <ProjectBox num={5} />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;