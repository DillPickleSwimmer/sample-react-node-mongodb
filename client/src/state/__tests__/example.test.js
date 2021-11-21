import { snapshot_UNSTABLE } from "recoil";
import { testData, testDataLength } from "../example";

describe("Test testData", () => {
  test("that default value is empty", () => {
    expect(snapshot_UNSTABLE().getLoadable(testData).valueOrThrow()).toBe("");
  });

  test("that it holds a string of data", () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => set(testData, "DATA"));
    expect(testSnapshot.getLoadable(testData).valueOrThrow()).toBe("DATA");
  });
});

describe("Test testDataLength", () => {
  test("that default value is empty", () => {
    expect(snapshot_UNSTABLE().getLoadable(testDataLength).valueOrThrow()).toBe(
      0
    );
  });

  test("that when testData changes, the length is correct", () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => set(testData, "DATA"));
    expect(testSnapshot.getLoadable(testDataLength).valueOrThrow()).toBe(4);
  });
});
