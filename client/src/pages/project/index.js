import React, { useRef, useState } from "react";
import './project.css';
import { motion } from 'framer-motion';

const Index = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  //마우스 호버
  const [isHovered_0, setIsHovered_0] = useState(false);
  const [isHovered_1, setIsHovered_1] = useState(false);
  const [isHovered_2, setIsHovered_2] = useState(false);
  const [isHovered_3, setIsHovered_3] = useState(false);
  const [isHovered_4, setIsHovered_4] = useState(false);
  const [isHovered_5, setIsHovered_5] = useState(false);

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

  const hoverMouseEnter_0 = () => {
    setIsHovered_0(true);
  };
  const hoverMouseLeave_0 = () => {
    setIsHovered_0(false);
  };

  const hoverMouseEnter_1 = () => {
    setIsHovered_1(true);
  };
  const hoverMouseLeave_1 = () => {
    setIsHovered_1(false);
  };

  const hoverMouseEnter_2 = () => {
    setIsHovered_2(true);
  };
  const hoverMouseLeave_2 = () => {
    setIsHovered_2(false);
  };

  const hoverMouseEnter_3 = () => {
    setIsHovered_3(true);
  };
  const hoverMouseLeave_3 = () => {
    setIsHovered_3(false);
  };

  const hoverMouseEnter_4 = () => {
    setIsHovered_4(true);
  };
  const hoverMouseLeave_4 = () => {
    setIsHovered_4(false);
  };

  const hoverMouseEnter_5 = () => {
    setIsHovered_5(true);
  };
  const hoverMouseLeave_5 = () => {
    setIsHovered_5(false);
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
        <a href="/">
          <div className="box"
            onMouseEnter={hoverMouseEnter_0}
            onMouseLeave={hoverMouseLeave_0}
          >
            <div className={`box__out ${isHovered_0 ? 'hovered__0' : 'hovered__back__0'}`}></div>
          </div>
        </a>
        <a href="/portfolio">
          <div className="box"
            onMouseEnter={hoverMouseEnter_1}
            onMouseLeave={hoverMouseLeave_1}
          >
            <div className={`box__out ${isHovered_1 ? 'hovered__1' : 'hovered__back__1'}`}></div>
          </div>
        </a>
        <a href="/portfolio">
          <div className="box"
            onMouseEnter={hoverMouseEnter_2}
            onMouseLeave={hoverMouseLeave_2}
          >
            <div className={`box__out ${isHovered_2 ? 'hovered__2' : 'hovered__back__2'}`}></div>
          </div>
        </a>
      </div>
      <div className="content__last">
      <a href="/portfolio">
          <div className="box"
            onMouseEnter={hoverMouseEnter_3}
            onMouseLeave={hoverMouseLeave_3}
          >
            <div className={`box__out ${isHovered_3 ? 'hovered__3' : 'hovered__back__3'}`}></div>
          </div>
        </a>
        <a href="/portfolio">
          <div className="box"
            onMouseEnter={hoverMouseEnter_4}
            onMouseLeave={hoverMouseLeave_4}
          >
            <div className={`box__out ${isHovered_4 ? 'hovered__4' : 'hovered__back__4'}`}></div>
          </div>
        </a>
        <a href="/portfolio" >
          <div className="box"
            onMouseEnter={hoverMouseEnter_5}
            onMouseLeave={hoverMouseLeave_5}
          >
            <div className={`box__out ${isHovered_5 ? 'hovered__5' : 'hovered__back__5'}`}></div>
          </div>
        </a>

      </div>
    </motion.div>
  );
};

export default Index;