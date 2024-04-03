import MyAlert from "../MyAlert/MyAlert";
import Welcome from "../Welcome/Welcome";
import AllTheBooks from "../AllTheBooks/AllTheBooks";
import MyFooter from "../MyFooter/MyFooter";


export default function Home({books, setBooks}) {
  
  return (
    <>
      <MyAlert />
      <Welcome />
      <AllTheBooks books={books} setBooks={setBooks} />
      <MyFooter />
    </>
  )
}