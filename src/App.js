// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js

import React, { useState } from 'react';
import Login from './components/login';
import ViandsList from './components/ViandsList';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Simulate login logic
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <ViandsList />
            )}
        </div>
    );
}

export default App;

 