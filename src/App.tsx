import React from 'react';
import Gallery from './containers/Gallery/Gallery'

const App: React.FC = () =>
{
  return (
    <div className="App">

      <p>Hello world from REACT! Before Gallery</p>
      <Gallery />
      <p>After Gallery</p>
    </div>
  );
}

export default App;
