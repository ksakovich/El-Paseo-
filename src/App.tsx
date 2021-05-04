import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./containers/Gallery/Gallery";
import Carousel from "./components/Carousel/Carousel";
import Pagination from "./components/Pagination/Pagination";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoryList from "./components/Categories/CategoryList";

const App: React.FC = () => {
  const categories = [
    { id: 1, text: "Fruits and Vegetables" },
    { id: 2, text: "Dairy and Eggs" },
    { id: 3, text: "Jams and Preserves" },
    { id: 4, text: "Cereals and Dried fruit" },
    { id: 5, text: "Bread and Bakery" },
    { id: 6, text: "Pastas and Vegan Burgers" },
    { id: 7, text: "Deli and Beverages" },
    { id: 8, text: "Pantry" },
    { id: 9, text: "Oil" },
    { id: 10, text: "Seeds and Legumes" },
    { id: 11, text: "Flour" },
    { id: 12, text: "Cleaning Products" },
    { id: 13, text: "Health and Personal Care" },
    { id: 14, text: "Handmade" },
    { id: 15, text: "Sets" },
  ];

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/products/:itemId" component={ItemDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />

        <Route path="/" exact>
          <Carousel />
          <Gallery />
          <CategoryList categoryitems={categories} />
          <Pagination />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      {/* <button onClick={() => { console.log('App Clicked'); }}> Click</button> */}
    </div>
  );
};

export default App;
