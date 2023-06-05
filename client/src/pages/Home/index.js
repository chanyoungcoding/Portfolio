import React,{useContext} from 'react';
import { motion } from "framer-motion"
import './home.css';
import Rhombus from '../../components/Rhombus';
import Navbar from '../../components/Navbar';
import { RandomNumberContext } from '../../contexts/randomNumber';
import TypeIt from 'typeit-react';

const Index = () => {
  const {randomNumber, wiseSaying} = useContext(RandomNumberContext);
  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0, y: 1000 }}
      animate={{opacity:1, y: 0}}
      exit={{ opacity: 0, y: 1000 }}
      transition={{
        duration: .8
      }}
    >
      {/* 바 부분 */}
      <Navbar />
      
      <TypeIt
        className="Home__intro"
        getBeforeInit={(instance) => {
          instance.type("Hello, I'm Chan's Development")
            .pause(750)
            .delete(4)
            .pause(300)
            .type("e")
            .pause(200)
            .type("r")
            .pause(200)
            .move(-10)
            .pause(200)
            .delete(2)
            .type(" Young")
            .move(11)
            .type("!!");

          return instance;
        }}
      />

      <div className="Home__main">
        <div className="Home__h1">
          <h1>
            {wiseSaying[randomNumber]}
          </h1>
        </div>
        
        <div>
          <h1 className='Home__select'>
            SELECT
          </h1>
        </div>

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