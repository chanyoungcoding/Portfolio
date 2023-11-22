import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD6 } from "@fortawesome/free-solid-svg-icons";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  .icon {
    text-decoration: none;
    color: #343434;
    font-size: 45px;
  }
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Link to="/">
          <FontAwesomeIcon className="icon" icon={faDiceD6} bounce />
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;