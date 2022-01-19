import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import CardItem from "./components/cardItem/CardItem";
import ErrorPage from "./components/404/ErrorPage";

function App() {
  // let link = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" component={<Main />} />
        <Route path="/article/:id" component={<CardItem />} />
        <Route path="*" component={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
