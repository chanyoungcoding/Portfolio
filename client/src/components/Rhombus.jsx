import React from 'react';
import {Link} from 'react-router-dom';
import './Rhombus.css'

const Rhombus = ({num, link}) => {
  return (
    <div className={`item-${num}`}>
      <Link to={link}>
        <div className={`rhombus-${num}`}></div>
      </Link>
    </div>
  );
};

export default Rhombus;