
import logo from "./logo.svg";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import {useState} from "react";

console.log("loaded");

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/new_blog" element={<NewBlog />} />
        <Route path="random" element={() => <h1> Something Random</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => <h1> You are home!!!!</h1>;
const NewBlog = () => <h3> PLease write a new blog!!</h3>;




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

export default App;
