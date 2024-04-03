import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/ComponentsPage/Home";
import NotFound from "./Components/NotFound/NotFound";
import BookDetails from "./Components/ComponentsPage/BookDetails";
import ThemeContextProvider from "./context/ThemeContextProvider";
import MyNav from "./Components/Navbar/MyNav";
import fantasy from'./Data/fantasy.json';


export default function App() {

  const [books, setBooks] = useState(fantasy);
  

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <MyNav books={books} setBooks={setBooks} />
        <Routes>
          <Route path = "/" element={<Home books={books} setBooks={setBooks} />} />
          <Route path="/details/:elementId" element={<BookDetails />} />
          <Route path = "/*" element= {<NotFound />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}