import './App.css';
import MyNav from './Components/Navbar/MyNav';
import Footer from './Components/Footer/Footer';
import Welcome from './Components/Welcome/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <MyNav/>
    <Welcome />
    <Footer />
    </>
  );
}

export default App;
