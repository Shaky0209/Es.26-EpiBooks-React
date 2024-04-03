import { screen, render } from "@testing-library/react";
import fantasy from "../Data/fantasy.json";
import App from "../App";

test('Testing The Rendering all SingleBook components', ()=>{

    render(
        <App />
    );
    
    const AllElementsBook = screen.getAllByTestId("book-card");
    expect(AllElementsBook.length).toBe(fantasy.length);
});