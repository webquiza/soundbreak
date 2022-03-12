import React from "react";
import Header from "./Header";
import Stopwatch from "./Stopwatch";
import Aunthentication from "./Authentication";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Stopwatch />
      <Aunthentication />
      <Footer />
    </React.Fragment>
  );
}

export default App;
