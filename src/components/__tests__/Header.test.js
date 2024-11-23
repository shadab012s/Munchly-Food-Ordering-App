import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";  
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it("should load header component with a login button", () => {
  // header uses redux, so we need to use Provider and provide the store
  // BrowserRouter is used as the header uses Link

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // assertion
  const loginButton = screen.getByRole("button",{name:"Login"});
  expect(loginButton).toBeInTheDocument();
});
it("should render  cart items ", () => {
    // header uses redux, so we need to use Provider and provide the store
    // BrowserRouter is used as the header uses Link
  
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    // assertion
    const loginButton = screen.getByText(/Cart/);
    expect(loginButton).toBeInTheDocument();
  });
// to test login to logout button
  it("should change login button to logout button",()=>
  {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
      </BrowserRouter>
    );
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
  })