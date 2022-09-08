//inport nav and tabs from bootstap 
import Nav from "react-bootstrap/Nav";
//import Link
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      {/* and add some global link navigation. */}
      <Link to="/">
        <Nav.Item>
          <Nav.Link href="/">Read</Nav.Link>
        </Nav.Item>
      </Link>
      <Link to="/new_blog">
        <Nav.Item>
          <Nav.Link href="/new_blog">Write</Nav.Link>
        </Nav.Item>
      </Link>
    </Nav>
  );
};

