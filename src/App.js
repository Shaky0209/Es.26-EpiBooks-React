import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/Navbar/MyNav';
import MyAlert from "./Components/MyAlert/MyAlert";
import Welcome from './Components/Welcome/Welcome';
import AllTheBooks from "./Components/AllTheBooks/AllTheBooks";
import MyFooter from './Components/MyFooter/MyFooter';

export default function App() {
  return (
    <>
    <MyNav/>
    <MyAlert />
    <Welcome />
    <AllTheBooks/>
    <MyFooter />
    </>
  );
}