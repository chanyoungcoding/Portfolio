import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD6,faBarcode,faMugSaucer } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div className='Home'>
      {/* 바 부분 */}
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

      {/* 큐브 박스 */}
      <div className='Home__main'>
        <div className='Home__h1'>
          <h1>Hello THIS IS MY PortFolio <br/>Web Site bro!!</h1>
        </div>
        
        <div class="container">
          <div class="item">
            <Link to='/'>
              <div class="rhombus"></div>
            </Link>
          </div>
          <div class="item-1">
            <Link to='/portfolio'>
              <div class="rhombus-1"></div>
            </Link>
          </div>
          <div class="item-2">
            <Link to='/'>
              <div class="rhombus-2"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;