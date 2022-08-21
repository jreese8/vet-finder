// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// // import Navigation from '.components/Nav/Navigation';
// // import Footer from '.components/Footer/Footer';
// import Home from './components/Home/Home';
// // import Profile from './components/Profile/Profile';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';

// //planned components
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={Home} />
//           {/* <Route path="profile" element={Profile} /> */}
//           <Route path="about" element={About} />
//           <Route path="contact" element={Contact} />
//       </Routes>
//     </div>
//   )
// }

// export default App;

import React from 'react';
import './App.css';
import MyGoogleMap from './components/MyGoogleMap/MyGoogleMap';


function App() {

  return (
    <div className="main-wrapper">
      <MyGoogleMap />
    </div>
  );
}

export default App;
