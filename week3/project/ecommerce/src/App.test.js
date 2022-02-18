import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

const testProducts = [
  {
    category: "electronics",
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    id: 9,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
  },
  {
    category: "jewelery",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    id: 5,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  },
  {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    category: "women's clothing",
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    id: 15,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  },
];

const testCategories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const successHandlers = [
  rest.get("https://fakestoreapi.com/products/categories", (req, res, ctx) => {
    return res(ctx.json(testCategories));
  }),
  rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(ctx.json(testProducts));
  }),
];

const errorHandlers = [
  rest.get("https://fakestoreapi.com/products/categories", (req, res, ctx) => {
    return res(ctx.status(500).json({ message: "Internal Server Error" }));
  }),
  rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(ctx.status(500).json({ message: "Internal Server Error" }));
  }),
];

const categoryHandler = rest.get(
  `https://fakestoreapi.com/products/category/:category`,
  (req, res, ctx) => {
    const { category } = req.params;
    return res(
      ctx.json(testProducts.filter((product) => product.category === category))
    );
  }
);

const productHandler = rest.get(
  `https://fakestoreapi.com/products/:id`,
  (req, res, ctx) => {
    const id = parseInt(req.params.id);
    return res(ctx.json(testProducts.filter((product) => product.id === id)));
  }
);

const server = setupServer(...successHandlers);
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

  it("Test that the app returns error", async () => {
    server.use(...errorHandlers);

    render(<App />);

    const errorElem = await screen.findByText("Error: Network request failed");

    expect(errorElem).toBeInTheDocument();
  });

  it("Test that products are filtered by category", async () => {
    server.use(...successHandlers, categoryHandler);

    render(<App />);

    await screen.findByText(testProducts[0].title);

    for (const category of testCategories) {
      userEvent.click(screen.getByText(category));

      await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));

      const products = screen.getAllByTestId(/category/i);

      expect(products.length).toEqual(1);
      expect(products[0]).toHaveAttribute("data-testid", `category${category}`);
    }
  });
});

describe("Favorites", () => {
  it("Test that the product is added to favorites", async () => {
    server.use(...successHandlers, productHandler);

    render(<App />);

    await screen.findByText(testProducts[0].title);

    userEvent.click(screen.getByTestId(`favorite${testProducts[0].id}`));

    userEvent.click(screen.getByRole("link", { name: /favorites/i }));

    expect(await screen.findByText(testProducts[0].title)).toBeInTheDocument();
  });

  it("Test that the product is removed from favorites", async () => {
    server.use(...successHandlers, productHandler);
    const productTitle = testProducts[0].title;

    render(<App />);

    userEvent.click(screen.getByRole("link", { name: /products/i }));

    await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));

    userEvent.click(screen.getByTestId(`favorite${testProducts[0].id}`));

    userEvent.click(screen.getByRole("link", { name: /favorites/i }));

    expect(await screen.findByText(productTitle)).toBeInTheDocument();

    userEvent.click(screen.getByTestId(`favorite${testProducts[0].id}`));

    expect(screen.queryByText(productTitle)).not.toBeInTheDocument();
  });
});
