
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import mockData from "../mocks/mockData.json";
import { act } from "react";
import "@testing-library/jest-dom";

// Mock fetch function to return mockData
console.log(mockData);
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockData),
  });
});

it("should render the Body component and filter restaurants by 'Pizza'", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });


  // Check that all cards are rendered initially
  const allCards = screen.getAllByTestId("resCardId");
  expect(allCards.length).toBe(20); // Adjust based on your mock data's total length

  // Ensure the search input and button are present
  const searchInput = screen.getByTestId("searchId");
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();

  // Simulate typing "Pizza" into the search input
  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  // Click the search button to trigger filtering
  fireEvent.click(searchButton);

  // Get the filtered cards after the search
  const filteredCards = screen.getAllByTestId("resCardId");
  console.log("Filtered Cards:", filteredCards.length);

  // Adjust the expectation based on your actual filtered data
  expect(filteredCards.length).toBe(5); // Update to match expected filtered results

  
});

it("should test top rated restaurant",async()=>{
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // testing top rated restaurant
  const topRatedBtn =screen.getByRole("button",{name:"Top Rated Restaurants"});
  fireEvent.click(topRatedBtn);
  const topRatedcard=screen.getAllByTestId("resCardId");
  expect(topRatedcard.length).toBe(15);
})
