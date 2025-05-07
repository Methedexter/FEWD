import React, { useState } from 'react';
import ReactLifeCycle from './ReactLifeCycle';
import './App.css';

function App() {
  const [mount, setMount] = useState(true);

  return (
    <div className="App">
      <h1>React Life Cycle</h1>
      {mount && <ReactLifeCycle />}
      <button onClick={() => setMount(!mount)}>Toggle</button>
    </div>
  );
}

export default App;

// function App() {
//   const [showChild, setShowChild] = useState(false);

//   const toggleChild = () => {
//     setShowChild(prev => !prev);
//   };
// const [mount , unMount] = useState(true);

//   return (
//     <div className="App">
//       <h1>React Conditional Rendering</h1>
//       <button onClick={toggleChild}>
//         {showChild ? 'Hide Child' : 'Show Child'}
//       </button>
//       <Parent showChild={showChild} />
//     </div>

//   );
// }
