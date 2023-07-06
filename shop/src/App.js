import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Row, Col} from 'react-bootstrap';

function App() {
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
          <Col md={4}>
          <img src="/img/001.jpg" alt="아틀란티스 소녀" width="100%"/>
            <h4>아틀란티스 소녀</h4>
            <p>BoA</p>
          </Col>
          <Col md={4}>
          <img src="/img/002.jpg" alt="more than words" width="100%"/>
            <h4>More than words</h4>
            <p>5tion</p>
          </Col>
          <Col md={4}>
          <img src="/img/003.jpg" alt="안되나요" width="100%"/>
            <h4>안되나요...</h4>
            <p>휘성</p>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default App;
