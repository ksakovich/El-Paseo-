import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Gallery from './containers/Gallery/Gallery';
import Carousel from './components/Carousel/Carousel';
import Pagination from './components/Pagination/Pagination';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import ItemDetails from './pages/ItemDetails/ItemDetails';

const App: React.FC = () =>
{
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Switch>
          <Route path="/gallery" >
            <Carousel />
            <Gallery />
            <Pagination />
          </Route>
          <Route path="/itemdetails">
            <ItemDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
