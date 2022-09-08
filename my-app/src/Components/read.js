import Carousel from "react-bootstrap/Carousel";

//consume a prop by destructuing it from the aruments of that component (blogs)
export default function Read({ blogs }){
  return (
    <Carousel variant="dark" slide={false}>
      {/* //map throught data array to return information in it's own individual carousel */}
      {blogs.map((blog, i) => (
        //assign earch item in the array a key Id of the index id
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={blog.img} alt="First slide" />
          <Carousel.Caption>
            {/* \/inside yellow{} is an object outer {} are jsx */}
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                {/* //have to use className instead of class in react */}
              <h3 style={{ color: "white" }} className="caption-shadows">
                {blog.title}
              </h3>
              <p style={{ color: "white" }} className="caption-shadows">
                {blog.body}
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
};
