import { screen, render, getByTestId, getAllByTestId } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "../context/ThemeContextProvider";
import Home from "../Components/ComponentsPage/Home";
import NotFound from "../Components/NotFound/NotFound";
import fantasy from "../Data/fantasy.json";
import { fireEvent } from "@testing-library/react";


test("Verify correctly search function", async ()=>{
    
    
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <Routes>
                    <Route path = "/" element={<Home books={fantasy} />} />
                    <Route path = "/*" element= {<NotFound />} />
                </Routes>
            </ThemeContextProvider>
        </BrowserRouter>
    )
    
    const wantedObj = fantasy.map((element)=> {return element.title.toLowerCase().includes("destiny")});
    // const wantedObj = 4;
    
    fireEvent.change(screen.getByTestId("form-control"), { target: { value: "destiny" } });

    const itemsFound = await screen.findAllByTestId ("book-card");

    expect(itemsFound.length).toBe(wantedObj.length);

});