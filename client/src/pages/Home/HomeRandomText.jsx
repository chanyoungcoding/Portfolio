import React from 'react'
import { useRecoilValue } from 'recoil';
import { randomQuotes } from '../../recoil/RandomQuotes';
import styled from 'styled-components';
import { randomText } from '../../recoil/RandomText';

const HomeRandomQuotesBox = styled.div`
    position: absolute;
    width: 500px;
    top: 350px;
    left: -150px;
    transform: rotate(-90deg);
    h1 {
      font-size: 40px;
    }
`

const HomeRandomTextBox = styled.div`
  position: absolute;
  top: 350px;
  right: -110px;
  transform: rotate(90deg);
  h1 {
    font-size: 150px;
    color: #DEDDDB;
  }
`

const HomeRandomText = () => {

  const Quotes = useRecoilValue(randomQuotes);
  const QuotesRandom = Math.floor(Math.random() * 5)

  const Text = useRecoilValue(randomText);
  const TextRandom = Math.floor(Math.random() * 4);


  return (
    <>
      <HomeRandomQuotesBox>
        <h1>
          {Quotes[QuotesRandom]}
        </h1>
      </HomeRandomQuotesBox>
      <HomeRandomTextBox>
        <h1>
          {Text[TextRandom]}
        </h1>
      </HomeRandomTextBox>
    </>
  )
}

export default React.memo(HomeRandomText);