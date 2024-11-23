import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("conatct us page Test case",()=>{
test("should load the contact page", () => {
    render(<Contact />);
    const button = screen.getAllByRole("button");
  
    // Assertion: Check if the heading (button) is in the document
    expect(button[0]).toBeInTheDocument();  // Fix to check first button
  });
  


test("testing header", () => {
    render(<Contact />);
    const headings = screen.getAllByRole("heading");
  
    // Check if at least one heading exists
    expect(headings.length).toBeGreaterThan(0);
    // console.log(headings);
  
    // Optionally: Check the first heading is in the document
    expect(headings[0]).toBeInTheDocument();
  });

  test("testing input box",()=>{
    render(<Contact />);
    const inputBox=screen.getAllByRole("textbox");
    expect(inputBox[0]).toBeInTheDocument();
  });

  test("testing input box",()=>{
    render(<Contact />);
    const placeholder=screen.getByPlaceholderText("Enter your full name");
    expect(placeholder).toBeInTheDocument();
  });
});
  
  