import { useState } from "react";

//consume a prop by destructuing it from the aruments of that component (setBlogState)
export default function NewBlog({ setBlogState }) {
  //set a new internal state for blog because it will have a bunch of forms
  
  const [newBlog, setNewBlog] = useState({ title: "", img: "", body: "" });

  return (
    <>
    <h1>
      {" "}
      Welcome to our Blog writing page, please provide info about your new
      blog entry below:{" "}
    </h1>
      {/* //on change take event upload to new blog */}
      {/* setNewBlog has callback functions: old state as first paramater 
      and updates with second parameter with new value.*/}
       Title:{" "}
      <input
        onChange={(event) =>
          setNewBlog((oldState) => ({ ...oldState, title: event.target.value }))
        }
        value={newBlog.title}
      />
      Body:{" "}
      <input
        onChange={(event) =>
          setNewBlog((oldState) => ({ ...oldState, body: event.target.value }))
        }
        value={newBlog.body}
      />
      img:{" "}
      <input
        onChange={(event) =>
          setNewBlog((oldState) => ({ ...oldState, img: event.target.value }))
        }
        value={newBlog.img}
      />
      {/* //add button to submit new blog */}
      {/* take in setblogstate pass in old blog state and return an array that returns all previous blogs plus the new blog */}
      <button
        onClick={() =>
          setBlogState((oldBlogState) => [...oldBlogState, newBlog])
        }
      >
        Submit new Blog!
      </button>
      </>
  );
}
