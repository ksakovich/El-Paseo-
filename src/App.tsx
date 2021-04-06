import React from 'react';
import Gallery from './containers/Gallery/Gallery'

const App: React.FC = () =>
{
  function click()
  {
    console.log("!!!!!!!LICKED")
  }
  return (
    <div className="App">

      <p>Hello world from REACT! Before Gallery</p>
      <Gallery />
      <button onClick={click}>Click</button>
      <p>After Gallery</p>
    </div>
  );
}

export default App;
