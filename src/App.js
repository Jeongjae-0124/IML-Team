import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [topVertices, setTopVertices] = useState(0);
  const [bottomVertices, setBottomVertices] = useState(0);

  const renderDots = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index} className="dot">•</span>
    ));
  };

  return (
    <div className="container">
      <div className="input-container">
        <label htmlFor="top-vertices">Top Vertices:</label>
        <input
          id="top-vertices"
          type="number"
          value={topVertices}
          onChange={(e) => setTopVertices(Number(e.target.value))}
        />
      </div>

      <div className="input-container">
        <label htmlFor="bottom-vertices">Bottom Vertices:</label>
        <input
          id="bottom-vertices"
          type="number"
          value={bottomVertices}
          onChange={(e) => setBottomVertices(Number(e.target.value))}
        />
      </div>

      <div className="vertices-container">
        {renderDots(topVertices)}
      </div>

      <div className="vertices-container">
        {renderDots(bottomVertices)}
      </div>

    </div>
  );
};

export default App;