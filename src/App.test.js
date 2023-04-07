test("", () => {});

// import { fireEvent, render, screen } from "@testing-library/react";
// import App from "./App";
// import userEvent from "@testing-library/user-event";
// import { act } from "react-dom/test-utils";

// describe("TEST APP", () => {
//   test("renders learn react link", () => {
//     render(<App />);
//     const helloWorldElem = screen.getByText(/hello world/i);
//     const btn = screen.getByRole("button");
//     const input = screen.getByPlaceholderText(/input value/i);

//     expect(helloWorldElem).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();
//     expect(input).toBeInTheDocument();
//     expect(input).toMatchSnapshot();
//   });
//   test("QueryBy элемент", () => {
//     render(<App />);
//     const helloWorldElem = screen.queryByText(/hello2/i);
//     expect(helloWorldElem).toBeNull();
//   });
//   test("FindBy элемент", async () => {
//     render(<App />);

//     const helloWorldElem = await screen.findByText(/data/i);
//     expect(helloWorldElem).toBeInTheDocument();
//     expect(helloWorldElem).toHaveStyle({ color: "red" });
//   });

//   test("Click event", async () => {
//     render(<App />);
//     const btn = screen.getByTestId("toggle-btn");
//     expect(screen.queryByTestId("toggle-elem")).toBeNull();
//     fireEvent.click(btn);
//     expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId("toggle-elem")).toBeNull();
//   });
//   test("input event", () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/input value/i);

//     expect(screen.queryByTestId("value-elem")).toContainHTML("");
//     // eslint-disable-next-line testing-library/no-unnecessary-act
//     act(() => {
//       fireEvent.input(input, { target: { value: "123123" } });
//     });

//     // userEvent.type(input, "123123");
//     expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
//   });
// });
