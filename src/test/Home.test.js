import { fireEvent } from "@testing-library/react";
import { screen, render } from "@testing-library/react";
import fantasy from "../Data/fantasy.json";
import App from "../App";

test("Verify correctly search function", async ()=>{

    render(
        <App />
    )
    
    const wantedObj = fantasy.filter((element)=> {return element.title.toLowerCase().includes("destiny")});
    
    fireEvent.change(screen.getByTestId("form-control"), { target:{ value: "destiny" }});

    const itemsFound = await screen.findAllByTestId("book-card");

    expect(itemsFound.length).toBe(wantedObj.length);

});