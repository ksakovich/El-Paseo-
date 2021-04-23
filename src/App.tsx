import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Gallery from './containers/Gallery/Gallery';
import Carousel from './components/Carousel/Carousel';
import Pagination from './components/Pagination/Pagination';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () =>
{
  return (

    <div className="App">
      <Navbar />
      <Switch>

        <Route exact path="/products/:itemId" component={ItemDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />

        <Route path="/" exact >
          <Carousel />
          <Gallery />
          <Pagination />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
      <button onClick={() => { console.log('App Clicked'); }}> Click</button>
    </div>
  );
}

export default App;
