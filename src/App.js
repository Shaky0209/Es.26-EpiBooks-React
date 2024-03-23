import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MyNav from "./Components/Navbar/MyNav";
import MyAlert from "./Components/MyAlert/MyAlert";
import Welcome from "./Components/Welcome/Welcome";
import AllTheBooks from "./Components/AllTheBooks/AllTheBooks";
import MyFooter from "./Components/MyFooter/MyFooter";
import fantasy from "./Data/fantasy.json";
import { ThemeContext } from "./context/TemeContextProvider";

export default function App() {
  const [books, setBooks] = useState(fantasy);
  const [theme, setTheme] = useState(true);

  return (
    <>
      <ThemeContext.Provider>
        <MyNav setBooks={setBooks} theme={theme} setTheme={setTheme} />
        <MyAlert theme={theme} />
        <Welcome theme={theme} />
        <AllTheBooks books={books} theme={theme} />
        <MyFooter theme={theme} />
      </ThemeContext.Provider>
    </>
  );
}