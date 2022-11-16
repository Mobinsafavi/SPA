import { Fragment } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product">
          <Product></Product>
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
