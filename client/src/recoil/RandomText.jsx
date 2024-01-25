import { atom } from "recoil";

export const randomText = atom({
  key: 'randomText',
  default: [
    'SELECT',
    'CHOICE',
    'PROVE',
    'POSSIBLE'
  ]
})