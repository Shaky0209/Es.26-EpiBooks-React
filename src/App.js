import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/ComponentsPage/Home";
import NotFound from "./Components/NotFound/NotFound";
import BookDetails from "./Components/ComponentsPage/BookDetails";
import ThemeContextProvider from "./context/ThemeContextProvider";


export default function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path="/details/:elementId" element={<BookDetails />} />
          <Route path = "/*" element= {<NotFound />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}