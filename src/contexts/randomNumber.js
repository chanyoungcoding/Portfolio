import React, {useEffect, useState, createContext} from 'react';

const RandomNumberContext = createContext();

const RandomNumberProvider = ({ children }) => {
  
  const lifeQuotes = [
    'When you believe in a thing, believe in it all the way, implicitly and unquestionable. - Walt Disney',
    'The flower that blooms in adversity is the most rare and beautiful of all. - Mulan',
    'The past can hurt. But from the way I see it, you can either run from it, or learn from it. - Lion King',
    'Share your gift with the world. Who knows how many lives you are saving just by doing so. - Kung Fu Panda',
    'If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt',
    'Many of life’s failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison',
  ]

  const [randomNumber, setRandomNumber] = useState(null);
  const [wiseSaying] = useState(lifeQuotes);

  useEffect(() => {
    const random = Math.floor(Math.random() * 5) + 1
    setRandomNumber(random);
  }, [randomNumber])

  const totalContext = {
    randomNumber,
    wiseSaying
  }
  
  return (
    <RandomNumberContext.Provider value={totalContext}>
      {children}
    </RandomNumberContext.Provider>
  )
}

export { RandomNumberContext, RandomNumberProvider };