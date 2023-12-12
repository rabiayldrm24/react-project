import './App.css';
import {Button,Navbar, Container, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {  BrowserRouter,   Routes,  Route,  Link } from "react-router-dom";
import List from './List';
import FirstComponent from './FirstComponent';
import Slider from './Slider';
import Calculator from './Calculator';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">React</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/list">List</Nav.Link>
        <Nav.Link as={Link} to="/firstcomponent">First Component</Nav.Link>
        <Nav.Link as={Link} to="/slider">Slider</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/calculator">Calculator</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    <div>
      <Routes>
        <Route path="/list" element={<List name="Ayşe" dept="CSE" gpa="2.8" buttontxt="Click!"/>}></Route>
        <Route path="/firstcomponent" element={<FirstComponent initialText="Enter a number" buttontext="Click!" />}></Route>
        <Route path="/slider" element={<Slider/>}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
    </div>

    </div>
    </BrowserRouter>
  );
}
 {/* <>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</>*/}    

export default App;
