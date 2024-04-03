import { screen, render } from "@testing-library/react";
import App from "../App";

test("Checks for the presence of the SingleComment at startupt ", ()=>{

    render(
        <App />
    )

    const SCElement = screen.queryAllByTestId("single-comment");

    expect(SCElement.length).toBe(0);
})