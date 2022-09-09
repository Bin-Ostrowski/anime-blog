import './App.css';
//connect app to the browser's URL: import BrowserRouter, routes, route
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import Read from "./Components/Read";
import {useState} from "react";
import blogs from "./data";
import NewBlog from './Components/NewBlog';

function App() {
  //set state at lowest level shared by both NewBlog and Read.
  //inital state is blogs
  const [blogState, setBlogState] = useState(blogs);
  return (
    //connect your app to the browser's URL: import
    //and render it around your whole app.
    <BrowserRouter>
      <Navigation />
      {/* navigation links and routes are in ./Components/Navigation */}
      {/* teach React Router how to render our app at different URLs by creating our first "Route Config" */}
      <Routes>
        {/* //pass in Read prop blogs=blogState state */}
        <Route path="/" element={<Read blogs={blogState} />} />
        {/* //pass into NewBlog a set blog state  */}
        <Route
          path="/new_blog"
          element={<NewBlog setBlogState={setBlogState} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;