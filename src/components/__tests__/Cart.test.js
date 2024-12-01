import { screen, render, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import mockData from "../mocks/mockRestaurantMenuData.json";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from"../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";


global.fetch=jest.fn(()=>
Promise.resolve({
    json:()=>Promise.resolve(mockData),
}))

it("should load restaurants menu component",async()=>{
    await act(async()=>render(
   <BrowserRouter><Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider></BrowserRouter> 
    ));
    const accordianHeader=screen.getByText("Recommended (20)");
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("foodItemsId").length).toBe(20);

    // testing the add button of a food item
    const addButtons= screen.getAllByRole("button",{name:"Add +"});
    console.log(addButtons.length);// it will give 10

    //before clicking
    
    expect(screen.getByText("0"));

    // clicking first fooditem's button and updating the cart which is a part of Header components
    fireEvent.click(addButtons[0]);
    expect(screen.getAllByText("1"));

    fireEvent.click(addButtons[1]);
    expect(screen.getByText("2"));
    //checking the length after adding to cart
    expect(screen.getAllByTestId("foodItemsId").length).toBe(22);

    //clicking the clear cart button
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    //length will be decrease by 2
    expect(screen.getAllByTestId("foodItemsId").length).toBe(20);


})