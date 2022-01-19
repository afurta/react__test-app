import "./App.css";
import BookList from "./components/BooksList/BookList";
import { Context } from "./context/context";

function App() {
  return (
    <Context>
      <div className="App">
        <BookList />
      </div>
    </Context>
  );
}

export default App;
