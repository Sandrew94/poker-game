import { test } from "@jest/globals";
import valueHand from "../js/components/cardValue.js";

describe("Test all card value", () => {
  test("High card", () => {
    const randomNum = [7, 5, 22, 41, 38];
    expect(valueHand(randomNum).values.filter((count) => count === 2)).toEqual(
      []
    );
  });

  ///////////////////////

  test("Pair", () => {
    const randomNum = [32, 13, 20, 12, 25];
    expect(valueHand(randomNum).values.filter((count) => count === 2)).toEqual([
      2,
    ]);
  });

  //////////////////////
  test("Two Pair", () => {
    const randomNum = [4, 36, 48, 36, 48];
    expect(valueHand(randomNum).values.filter((count) => count === 2)).toEqual([
      2, 2,
    ]);
  });

  ///////////////////////

  test("Tris", () => {
    const randomNum = [3, 42, 39, 3, 18];
    expect(valueHand(randomNum).values.some((count) => count === 3)).toEqual(
      true
    );
  });

  ///////////////////////

  test("Straight", () => {
    const randomNum = [7, 21, 22, 49, 24];

    const firstCardIndex = valueHand(randomNum).values.findIndex(
      (index) => index === 1
    );

    expect(
      valueHand(randomNum)
        .values.slice(firstCardIndex, firstCardIndex + 5)
        .filter((count) => count === 1).length === 5
    ).toEqual(true);
  });

  ///////////////////////

  test("Flush", () => {
    const randomNum = [27, 29, 33, 34, 36];
    expect(valueHand(randomNum).suits.some((count) => count === 5)).toEqual(
      true
    );
  });

  /////////////////////

  test("Full House", () => {
    const randomNum = [16, 42, 3, 3, 1];

    expect(valueHand(randomNum).values.filter(Boolean).length === 2).toEqual(
      true
    );
  });

  /////////////////////

  test("Quads", () => {
    const randomNum = [12, 25, 38, 51, 32];

    expect(valueHand(randomNum).values.some((count) => count === 4)).toEqual(
      true
    );
  });

  /////////////////////

  test("Straight Flush", () => {
    const randomNum = [16, 17, 18, 19, 20];

    expect(
      valueHand(randomNum).ranks.flush && valueHand(randomNum).ranks.straight
    ).toEqual(true);
  });

  /////////////////////

  test("Royal Flush", () => {
    const randomNum = [8, 9, 10, 11, 12];

    const firstCardIndex = valueHand(randomNum).values.findIndex(
      (index) => index === 1
    );

    expect(
      valueHand(randomNum).ranks.straight_flush && firstCardIndex === 8
    ).toEqual(true);
  });

  /////////////////////
});
