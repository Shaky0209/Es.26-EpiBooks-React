import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/Navbar/MyNav';
import MyAlert from "./Components/MyAlert/MyAlert";
import Welcome from './Components/Welcome/Welcome';
import AllTheBooks from "./Components/AllTheBooks/AllTheBooks";
import MyFooter from './Components/MyFooter/MyFooter';
import InputControl from './Components/InputControl/InputControl';
import { useState } from 'react';
import fantasy from './Data/fantasy.json';



export default function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [books, setBooks] = useState(fantasy);

  const seachFnc = ()=>{
    let result = fantasy.filter((element) => {
      return(element.title.toLowerCase().includes(inputSearch.toLowerCase()))
    });
    setBooks(result);
  }

  return (
    <>
    <MyNav />
    <InputControl
    setValue = {setInputSearch}
    doSearch = {seachFnc}
    />
    <MyAlert />
    <Welcome />
    <AllTheBooks books={books} />
    <MyFooter />
    </>
  );
}