import { useState } from "react";
import MyNav from "../Navbar/MyNav";
import MyAlert from "../MyAlert/MyAlert";
import Welcome from "../Welcome/Welcome";
import AllTheBooks from "../AllTheBooks/AllTheBooks";
import MyFooter from "../MyFooter/MyFooter";
import fantasy from "../../Data/fantasy.json";


export default function Home() {

    const [books, setBooks] = useState(fantasy);
    

  return (
    <>
      <MyNav setBooks={setBooks} />
      <MyAlert />
      <Welcome />
      <AllTheBooks books={books} />
      <MyFooter />
    </>
  )
}