import React from 'react';
import {Link} from 'react-router-dom';
import './Rhombus.css'

const Rhombus = ({num, link, mouseOver, mouseOut}) => {

  return (
    <div className={`item-${num}`} onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <Link to={link}>
        <div className={`rhombus-${num}`}></div>
      </Link>
    </div>
  );
};

export default Rhombus;