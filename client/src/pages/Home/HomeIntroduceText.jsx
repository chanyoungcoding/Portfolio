import React from 'react'
import TypeIt from 'typeit-react';
import styled from 'styled-components';

const TypeText = styled(TypeIt)`
  display: block;
  text-align: center;
  position: relative;
  top: 100px;
  font-size: 30px;
  color: #343434;
`



const IntroText = () => {
  return (
    <>
      <TypeText
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
            .type("!!")
          return instance;
        }}
      />
    </>
  )
}

export default IntroText