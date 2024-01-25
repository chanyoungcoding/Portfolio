import React from 'react';
import { motion } from "framer-motion"
import './home.css';
import Rhombus from '../../components/Rhombus';
import Navbar from '../../components/Navbar';
import IntroText from './HomeIntroduceText';
import HomeRandomText from './HomeRandomText';

const Index = () => {

  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0, y: 1000 }}
      animate={{opacity:1, y: 0}}
      transition={{
        duration: .8
      }}
    >
      <Navbar />
      <IntroText/>

      <div className="Home__main">
        <HomeRandomText/>

        <motion.div
          className="container"
          initial={{ opacity:0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Rhombus num={0} link={'/portfolio'} />
          <Rhombus num={1} link={'/project'} />
          <Rhombus num={2} link={'/declaration'} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;