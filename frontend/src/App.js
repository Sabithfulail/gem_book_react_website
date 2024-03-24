import React from 'react';
import './App.css';
import Hero from './component/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
import RouteHandler from './component/router/RouteHandler'; // Import RouteHandler without curly braces

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/explore" element={<RouteHandler />} /> {/* Route for the explore page */}
      </Routes>
    </div>
  );
}

export default App;
//text

// import './App.css';
// // import Hero from './component/Hero/Hero';
// import RouteHandler from './component/router/RouteHandler';




// function App() {
//   return (
//     <div className="App">
//       {/* <Hero/> */}
//       <RouteHandler/>
      
//     </div>
//   );
// }

// export default App;
