import { atom, selector } from 'recoil'

export const orderDetailsState = atom({
    key: "orderDetailsState", // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });