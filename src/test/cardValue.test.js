import { test } from "@jest/globals";
import valueHand from "../js/components/cardValue.js";

describe("Test all card value", () => {
  test("High card", () => {
    const randomNum = [7, 5, 22, 41, 38];
    expect(valueHand(randomNum)).toEqual("High Card");
  });

  ///////////////////////

  test("Pair", () => {
    const randomNum = [32, 13, 20, 12, 25];
    expect(valueHand(randomNum)).toEqual("Pair");
  });

  //////////////////////
  test("Two Pair", () => {
    const randomNum = [4, 36, 48, 36, 48];
    expect(valueHand(randomNum)).toEqual("Two Pairs");
  });

  ///////////////////////

  test("Tris", () => {
    const randomNum = [3, 42, 39, 3, 18];
    expect(valueHand(randomNum)).toEqual("Trips");
  });

  ///////////////////////

  test("Straight", () => {
    const randomNum = [7, 21, 22, 49, 24];
    expect(valueHand(randomNum)).toEqual("Straight");
  });

  ///////////////////////

  test("Flush", () => {
    const randomNum = [27, 29, 33, 34, 36];
    expect(valueHand(randomNum)).toEqual("Flush");
  });

  /////////////////////

  test("Full House", () => {
    const randomNum = [29, 42, 16, 4, 17];

    expect(valueHand(randomNum)).toEqual("Full House");
  });

  /////////////////////

  test("Quads", () => {
    const randomNum = [12, 25, 38, 51, 32];

    expect(valueHand(randomNum)).toEqual("Quads");
  });

  /////////////////////

  test("Straight Flush", () => {
    const randomNum = [16, 17, 18, 19, 20];

    expect(valueHand(randomNum)).toEqual("Straight Flush");
  });

  /////////////////////

  test("Royal Flush", () => {
    const randomNum = [8, 9, 10, 11, 12];
    expect(valueHand(randomNum)).toEqual("Royal Flush");
  });

  /////////////////////
});
