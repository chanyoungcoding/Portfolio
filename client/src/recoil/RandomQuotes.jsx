import { atom } from "recoil";

export const randomQuotes = atom({
  key: 'randomQuotes',
  default: [
    'When you believe in a thing, believe in it all the way, implicitly and unquestionable. - Walt Disney',
    'The flower that blooms in adversity is the most rare and beautiful of all. - Mulan',
    'The past can hurt. But from the way I see it, you can either run from it, or learn from it. - Lion King',
    'Share your gift with the world. Who knows how many lives you are saving just by doing so. - Kung Fu Panda',
    'If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt',
    'Many of life’s failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison',
  ]
})