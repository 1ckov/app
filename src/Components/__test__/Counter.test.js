import React from "react";
import Counter from "../Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

//Done by default
afterEach(() => {
  cleanup();
});

test("header renders with correct text", () => {
  const headerEL = getByTestId("header");

  expect(headerEL.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  const counterEL = getByTestId("counter");

  expect(counterEL.textContent).toBe("0");
});

test("the input etxists and its inital value is 1", () => {
  const inputEL = getByTestId("input");

  expect(inputEL.value).toBe("1");
});

test("add button renders with +", () => {
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
  const subBtn = getByTestId("sub-btn");

  expect(subBtn.textContent).toBe("-");
});

test("changing of input works correctly", () => {
  const inputEL = getByTestId("input");

  expect(inputEL.value).toBe("1");

  fireEvent.change(inputEL, {
    target: {
      value: "5",
    },
  });

  expect(inputEL.value).toBe("5");
});

test("clicking on plus-btn adds 1 to counter", () => {
  const addBtnEL = getByTestId("add-btn");
  const counterEL = getByTestId("counter");

  expect(counterEL.textContent).toBe("0");

  fireEvent.click(addBtnEL);

  expect(counterEL.textContent).toBe("1");
});

test("clicking on sub-btn subtracts 1 to counter", () => {
  const subBtnEL = getByTestId("sub-btn");
  const counterEL = getByTestId("counter");

  expect(counterEL.textContent).toBe("0");

  fireEvent.click(subBtnEL);

  expect(counterEL.textContent).toBe("-1");
});

test("changing input then clicking on add btn works correctly", () => {
  const addBtnEL = getByTestId("add-btn");
  const counterEL = getByTestId("counter");
  const inputEL = getByTestId("input");

  expect(counterEL.textContent).toBe("0");

  fireEvent.change(inputEL, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnEL);

  expect(counterEL.textContent).toBe("5");
});

test("subtracting input then clicking on sub btn works correctly", () => {
  const subBtnEL = getByTestId("sub-btn");
  const counterEL = getByTestId("counter");
  const inputEL = getByTestId("input");

  expect(counterEL.textContent).toBe("0");

  fireEvent.change(inputEL, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(subBtnEL);

  expect(counterEL.textContent).toBe("-5");
});

test("adding and subtracting leads to the correct number", () => {
  const subBtnEL = getByTestId("sub-btn");
  const addBtnEL = getByTestId("add-btn");
  const counterEL = getByTestId("counter");
  const inputEL = getByTestId("input");

  fireEvent.change(inputEL, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addBtnEL);
  fireEvent.click(addBtnEL);
  fireEvent.click(addBtnEL);
  fireEvent.click(addBtnEL);
  fireEvent.click(subBtnEL);
  fireEvent.click(subBtnEL);

  expect(counterEL.textContent).toBe("20");
});

test("counter contains correct className", () => {
  const subBtnEL = getByTestId("sub-btn");
  const addBtnEL = getByTestId("add-btn");
  const counterEL = getByTestId("counter");
  const inputEL = getByTestId("input");

  expect(counterEL.className).toBe("");

  fireEvent.change(inputEL, { target: { value: "50" } });
  // 50
  fireEvent.click(addBtnEL);

  expect(counterEL.className).toBe("");
  // 100
  fireEvent.click(addBtnEL);

  expect(counterEL.className).toBe("green");
  // 50
  fireEvent.click(subBtnEL);
  // 0
  fireEvent.click(subBtnEL);
  // -50
  fireEvent.click(subBtnEL);
  // -100
  fireEvent.click(subBtnEL);

  expect(counterEL.className).toBe("red");
});
