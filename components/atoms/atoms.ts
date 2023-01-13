import { atom } from "recoil";

export const CurrentUser = atom({
    key: 'CurrentUser',
    default: {},
  });

  export const ImageFiles = atom({
    key: 'ImageFiles',
    default: [],
  });