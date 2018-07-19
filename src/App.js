import React from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import "./scss/main.scss";

const App = () => (
  <div className="body">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
