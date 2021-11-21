import { atom, selector } from "recoil";

export const testData = atom({
  key: "testData", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const testDataLength = selector({
  key: "testDataLength", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(testData);
    return text.length;
  },
});
