import React, { useRef, useState } from "react";
import './project.css';
import { motion } from 'framer-motion';

const Index = () => {
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
    const walk = (x - startX) * 1; // 스크롤 속도 조절 (값을 조정하여 스크롤 속도를 조절할 수 있습니다.)
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
      <div className="content">
        <div className="box">good</div>
        <div className="box">good</div>
        <div className="box">good</div>
        <div className="box">good</div>
        <div className="box">good</div>
        <div className="box">good</div>
        <div className="box">good</div>
      </div>
    </motion.div>
  );
};

export default Index;