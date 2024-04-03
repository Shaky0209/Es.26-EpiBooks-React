import { screen, render } from "@testing-library/react";
import Welcome from "../Components/Welcome/Welcome";
import ThemeContextProvider from "../context/ThemeContextProvider";

test('Testing Welcome Component', ()=>{

    render(
        <ThemeContextProvider>
            <Welcome />
        </ThemeContextProvider>

    );

    const welcomeElement = screen.getByText("Welcome to the EpiBooks Shop!!!");

    expect(welcomeElement).toBeInTheDocument();
});