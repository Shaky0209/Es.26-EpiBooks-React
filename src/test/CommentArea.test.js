import { render, screen } from "@testing-library/react";
import CommentArea from "../Components/CommentArea/CommentArea";
import ThemeContextProvider from "../context/ThemeContextProvider";

test("Test rendering CommentArea component", ()=>{
    
    render(
        <ThemeContextProvider>
            <CommentArea />
        </ThemeContextProvider>
    );

    const commentAreaElement = screen.getByTestId("comment-area");

    expect(commentAreaElement).toBeInTheDocument();
});