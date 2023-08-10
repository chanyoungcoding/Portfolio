import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceD6,
  faBarcode,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to="/">
          <FontAwesomeIcon className="icon" icon={faDiceD6} bounce size="2xl" />
        </Link>
      </div>
      <ul>
        <Link to="/">
          <li>
            <FontAwesomeIcon className="icon" icon={faBarcode} size="2xl" />
          </li>
        </Link>
        <Link to="/">
          <li>
            <FontAwesomeIcon className="icon" icon={faMugSaucer} size="2xl" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;