import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD6,faBarcode,faMugSaucer } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div className='Home'>
      <div className='navbar'>
        <div>
          <Link to='/'>
            <FontAwesomeIcon className='icon' icon={faDiceD6} bounce size="2xl" />
          </Link>
        </div>
        <ul>
          <Link to='/'>
            <li><FontAwesomeIcon className='icon' icon={faBarcode} size="2xl" /></li>
          </Link>
          <Link to='/'>
            <li><FontAwesomeIcon className='icon' icon={faMugSaucer} size="2xl" /></li>
          </Link>
        </ul>
      </div>
      <div className='Home__main'>
        <h1>Hello THIS IS MY PortFolio Web Site bro!!</h1>
        <div class="container">
          <div class="item">
            <div class="rhombus"></div>
          </div>
          <div class="item-1">
            <div class="rhombus-1"></div>
          </div>
          <div class="item-2">
            <div class="rhombus-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;