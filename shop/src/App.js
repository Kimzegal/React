import "./App.css";
import data from "./data.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

function App() {
  let [songs] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Song4</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#songs">Songs</Nav.Link>
            <Nav.Link href="#list">Lists</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container fluid>
        <Row>
          {songs.map((a, i) => {
            return <Post sing={songs[i]} num={i + 1}></Post>;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Post(props) {
  console.log(props);
  return (
    <>
      <Col md={4}>
        <img src={props.sing.img} alt="아틀란티스 소녀" width="100%" />
        <h4>{props.sing.title}</h4>
        <p>{props.sing.singer}</p>
      </Col>
    </>
  );
}

export default App;
