// import fetchMock from "jest-fetch-mock";
// import {
//   render,
//   screen,
//   waitForElementToBeRemoved,
// } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";

// const categories = [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing",
// ];
// const products = [
//   {
//     category: "men's clothing",
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     id: 1,
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   },
// ];

// jest.setTimeout(30000);

// describe("Loading and showing products", () => {
//   it("should show the Loading text when the component is still loading", async () => {
//     render(<App />);

//     expect(screen.getByText("Loading categories...")).toBeInTheDocument();
//     expect(screen.getByRole("status")).toBeInTheDocument();

//     await screen.findByText(products[0].title);
//   });

//   it("should show the product the fetch returns", async () => {
// fetch.mockResponseOnce(testSuccessfulResponse);

//     render(<App />);

//     expect(await screen.findByText(products[0].title)).toBeInTheDocument();
//   });
// });

// describe("Error handling", () => {
//   beforeEach(() => {
//     enableFetchMocks();
//   });

//   afterEach(() => {
//     disableFetchMocks();
//   });

//   it("should show an error message if the fetch fails", async () => {
//     fetch.mockReject();

//     render(<App />);

//     const errors = await screen.findAllByText(/Error:/i);
//     for (const error of errors) {
//       expect(error).toBeInTheDocument();
//     }
//   });
// });

// describe("Selecting categories", () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//     fetchMock.mockIf((req) => {
// console.log(req);
//       if (req.pathname === "/products") {
//         return {
//           status: 200,
//           body: JSON.stringify(products),
//           headers: { "content-type": "application/json" },
//         };
//       } else if (req.pathname === "/products/categories") {
//         return {
//           status: 200,
//           body: JSON.stringify(categories),
//           headers: { "content-type": "application/json" },
//         };
//       }
//     });
//   });

//   it("should show the selected category", async () => {
//     render(<App />);

// await screen.findByText(products[0].title);

// expect(await screen.findByText(products[0].title)).toBeInTheDocument();
//     await waitForElementToBeRemoved(screen.queryByTestId("spinner"), {
//       timeout: 10000,
//     });

// for (const category of categories) {
//     userEvent.click(screen.getByText("electronics"));

//     await waitForElementToBeRemoved(screen.queryByTestId("spinner"), {
//       timeout: 10000,
//     });

//     const listItems = screen.getAllByTestId(/.*/);

//     console.log(listItems.length);

// for (const item of listItems) {
//   expect(item).toHaveAttribute("data-testid", "electronics");
// }
// }

// for (const category of categories) {
// const categoryButton = screen.getByText("electronics");

// fireEvent.click(categoryButton);

// const listItems = await screen.findAllByTestId(/.*/);

// expect(listItems[0]).toHaveAttribute("data-testid", "electronics");

// screen.debug();

// for (const item of listItems) {
//   expect(item).toHaveAttribute("data-testid", category);
// }
// }
//   });
// });

import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

const testProducts = [
  {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
];

const testCategories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const handlers = [
  rest.get("https://fakestoreapi.com/products/categories", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ testCategories }));
  }),
  rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(ctx.json({ testProducts }));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("Test that the app is loading initially", async () => {
    render(<App />);

    expect(screen.getByText("Loading categories...")).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();

    await screen.findByText(testProducts[0].title);
  });

  it("Test that the data the API gives is shown on the screen", async () => {
    render(<App />);

    expect(await screen.findByText(testProducts[0].title)).toBeInTheDocument();
  });
});
