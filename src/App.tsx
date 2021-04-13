import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Gallery from './containers/Gallery/Gallery'
import Carousel from './components/Carousel/Carousel'

const App: React.FC = () =>
{
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Gallery />
    </div>
  );
}

export default App;
