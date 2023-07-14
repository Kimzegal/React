import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

function Post(props) {
  return (
    <>
      <Col md={4}>
        <img src={props.sing.img} alt="앨범 사진" width="100%" />
        <Link to="/detail">
          <h4>{props.sing.title}</h4>
        </Link>
        <p>{props.sing.singer}</p>
      </Col>
    </>
  );
}

export default Post;
