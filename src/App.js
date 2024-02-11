import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [topVertices, setTopVertices] = useState(3);
  const [bottomVertices, setBottomVertices] = useState(3);

  const MAX_VERTICES = 50; // set to 50 for now because 50 is generally the largest that we can add before vertices start getting pushed outta the window
  const MIN_VERTICES = 3; // this is to fix a bug where the input was enabling negative numbers in the textbox

  const renderDots = (count) => {
    if (count > MAX_VERTICES) {
      count = MAX_VERTICES;
    }
    return Array.from({ length: count }, (_, index) => (
      <button key={index} className='dot'></button> // change to button because it made more sense to me than a "•" character. Plus, we can use button's onClick feature for future functionality
      // <span key={index} className="dot">•</span> 
    ));
  };

  return (
    <>
    <header>
      <link rel="preconnect" href="https://fonts.googleapis.com" /> {/* a nice fancy video game style font I found */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
    </header>
    <body>
      <div className="container">
        <div className="input-container">
          <label htmlFor="top-vertices">Top Vertices:</label>
          <input
            id="top-vertices"
            value={topVertices}
            min={MIN_VERTICES}
            max={MAX_VERTICES} 
            maxLength={2}
            onChange={(e) => {

              // fixes a bug where the user can still type a very large number (e.g 1000) into the textbox. 
              // In this situation the website crashes because it has to render so many vertices so this modification fixes that

              if (Number(e.target.value) > MAX_VERTICES) {
                e.target.value = MAX_VERTICES;
                setTopVertices(MAX_VERTICES);
              } else {
                setTopVertices(Number(e.target.value))
              }
              if (Number(e.target.value) < MIN_VERTICES) {
                e.target.value = MIN_VERTICES;
                setTopVertices(MIN_VERTICES);
              } else {
                setTopVertices(Number(e.target.value))
              }
              }}
          />
          <button id='addOne' onClick={
            () => {
              if (topVertices >= MAX_VERTICES) {
                return;
              } else {
                setTopVertices(topVertices + 1);
              }
            }
          }>+</button>
          <button id='removeOne' onClick={
            () => {
              if (topVertices <= MIN_VERTICES) {
                return;
              } else {
                setTopVertices(topVertices - 1);
              }
            }
          }>-</button>
        </div>

        <div className="input-container">
          <label htmlFor="bottom-vertices">Bottom Vertices:</label>
          <input
            id="bottom-vertices"
            type="number"
            value={bottomVertices}
            min={MIN_VERTICES}
            max={MAX_VERTICES}
            maxLength={2}
            onChange={(e) => {

              // fixes a bug where the user can still type a very large number (e.g 1000) into the textbox. 
              // In this situation the website crashes because it has to render so many vertices so this modification fixes that

              if (Number(e.target.value) > MAX_VERTICES) {
                e.target.value = MAX_VERTICES;
                setBottomVertices(MAX_VERTICES);
              } else {
                setBottomVertices(Number(e.target.value))
              }
              if (Number(e.target.value) < MIN_VERTICES) {
                e.target.value = MIN_VERTICES;
                setBottomVertices(MIN_VERTICES);
              } else {
                setBottomVertices(Number(e.target.value))
              }
            }}
          />
          <button id='addOne' onClick={
            () => {
              if (bottomVertices >= MAX_VERTICES) {
                return;
              } else {
                setBottomVertices(bottomVertices + 1);
              }
            }
          }>+</button>
          <button id='removeOne' onClick={
            () => {
              if (bottomVertices <= 3) {
                return;
              } else {
                setBottomVertices(bottomVertices - 1);
              }
            }
          }>-</button>
        </div>
        
        <div className="vertices-container">
          {renderDots(topVertices)}
        </div>

        <div className="vertices-container">
          {renderDots(bottomVertices)}
        </div>
      </div>
    </body>
    
    </>
    );
}

export default App;