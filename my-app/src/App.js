
import './App.css';
//connect app to the browser's URL: import BrowserRouter, routes, route
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import Read from "./Components/Read";
// import {useState} from "react";

function App() {
  return (
    //connect your app to the browser's URL: import 
    //and render it around your whole app.
    <BrowserRouter>
      <Navigation />
      {/* navigation links and routes are in ./Components/Navigation */}
      {/* teach React Router how to render our app at different URLs by creating our first "Route Config" */}
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/new_blog" element={<NewBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => <h1> You are home!!!!</h1>;
const NewBlog = () => <h3> PLease write a new blog!!</h3>;

export default App;
