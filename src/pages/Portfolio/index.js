import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './portfolio.css'

const index = () => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2, opacity: 1, rotateZ: 360 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Link to="/">뒤로가기</Link>
      </motion.div>
    </>
  );
};

export default index;