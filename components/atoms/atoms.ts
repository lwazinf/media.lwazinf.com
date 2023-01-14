import { atom } from "recoil";

export const CurrentUser = atom({
    key: 'CurrentUser',
    default: {},
  });

  export const ImageFiles = atom({
    key: 'ImageFiles',
    default: [],
  });

  export const AccValue = atom({
    key: 'AccValue',
    default: '',
  });

  export const ImagesValue = atom<any>({
    key: 'ImagesValue',
    default: [],
  });

  export const PriceValue = atom({
    key: 'PriceValue',
    default: '',
  });

  export const MapValue = atom({
    key: 'MapValue',
    default: '',
  });

  export const StudentsValue = atom({
    key: 'StudentsValue',
    default: '',
  });

  export const ServicesValue = atom<any>({
    key: 'ServicesValue',
    default: [],
  });