import React from "react";
import "./App.css";
import FetchUsers from "./FetchUsers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: true,
    };
  }

  toggleUsers = () => {
    this.setState((prevState) => ({
      showUsers: !prevState.showUsers,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Users List</h1>
        <button onClick={this.toggleUsers}>
          {this.state.showUsers ? "Unmount FetchUsers" : "Mount FetchUsers"}
        </button>
        {this.state.showUsers && <FetchUsers mount={this.state.showUsers} />}
      </div>
    );
  }
}

export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         setUsers(response.data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Lifecycle Components</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>
//               {user.name} - {user.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import ReactLifeCycle from './ReactLifeCycle';
// import './App.css';

// function App() {
//   const [mount, setMount] = useState(true);

//   return (
//     <div className="App">
//       <h1>React Life Cycle</h1>
//       {mount && <ReactLifeCycle />}
//       <button onClick={() => setMount(!mount)}>Toggle</button>
//     </div>
//   );
// }

// export default App;

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
