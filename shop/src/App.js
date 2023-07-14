import "./App.css";
import data from "./data.js";
import Post from "./components/Post.js";
import Detail from "./components/Detail.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

function App() {
  let [songs] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Song4</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#songs">Songs</Nav.Link>
            <Nav.Link href="#list">Lists</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Link to="/">홈</Link>

      <Routes>
        <Route
          path="/"
          element={
            <Container fluid>
              <Row>
                {songs.map((a, i) => {
                  return <Post sing={songs[i]} num={i + 1}></Post>;
                })}
              </Row>
            </Container>
          }
        />
        <Route path="/detail" element={<div>상세페이지임</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤12321321버요</div>} />
          <Route path="remember" element={<div>멤버요</div>} />
        </Route>
        <Route path="*" element={<div>오류페이지임</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet />
    </div>
  );
}

export default App;
