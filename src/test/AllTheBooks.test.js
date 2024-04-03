import { screen, render } from "@testing-library/react";
import ThemeContextProvider from "../context/ThemeContextProvider";
import fantasy from "../Data/fantasy.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/ComponentsPage/Home";
import NotFound from "../Components/NotFound/NotFound";




test('Testing The Rendering all SingleBook components', ()=>{

    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <Routes>
                    <Route path = "/" element={<Home />} />
                    <Route path = "/*" element= {<NotFound />} />
                </Routes>
            </ThemeContextProvider>
        </BrowserRouter>
    );
    
    const AllElementsBook = screen.getAllByTestId("book-card");
    expect(AllElementsBook.length).toBe(fantasy.length);
});