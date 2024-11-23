import { render,screen } from "@testing-library/react";
import RestaurantCard,{withPrometedLabel} from "../RestaurantCard";
import MOCK_DATA from"../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render restaurant card component with props data",()=>
{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name =screen.getByText("Taco Bell");
    expect(name).toBeInTheDocument();
});
// testing the promoted label

it("should render RestaurantCard component with Promoted label", () => {
    const PromotedCard = withPrometedLabel(RestaurantCard);

    render(<PromotedCard resData={MOCK_DATA} />);
    
    // Assuming the promoted label is rendered as text or a specific element
    const label = screen.getByText(/promoted/i);
    
    expect(label).toBeInTheDocument();
});
