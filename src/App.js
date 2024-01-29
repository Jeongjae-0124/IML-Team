import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [dots, setDots] = useState([]);

  const handleAddDot = () => {
    const newDot = {
      id: dots.length + 1,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };

    setDots((prevDots) => [...prevDots, newDot]);
  };

  const handleRemoveDot = () => {
    if (dots.length > 0) {
      setDots((prevDots) => prevDots.slice(0, -1)); // Remove the last dot
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <button onClick={handleAddDot} className='nodeButton' id='add'>Add Dot</button>
      <button onClick={handleRemoveDot} className='nodeButton' id='remove'>Remove Dot</button>
      {dots.map((dot) => (
        <div
          key={dot.id}
          style={{
            position: 'absolute',
            
            width: '10px',
            height: '10px',
            boxShadow: '2px 2px lightgray',
            borderRadius: '50%',
            backgroundColor: 'red',
            left: `${dot.x}px`,
            top: `${dot.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default App;