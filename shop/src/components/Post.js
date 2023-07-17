import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";

function Post(props) {
  let navigate = useNavigate();
  return (
    <>
      <Col md={4}>
        <img
          src={props.sing.img}
          onClick={() => {
            navigate("/detail/" + props.num);
          }}
          alt="앨범 사진"
          width="100%"
        />
        <h4>{props.sing.title}</h4>
        <p>{props.sing.singer}</p>
      </Col>
    </>
  );
}

export default Post;
