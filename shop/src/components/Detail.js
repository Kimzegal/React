import { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, InputGroup, Form } from "react-bootstrap";
import { buildQueries } from "@testing-library/react";

function Detail(props) {
  let { id } = useParams();
  let [num, setNum] = useState("");

  useEffect(() => {
    if (isNaN(num) === true) {
      alert("그러지마세요");
    }
  }, [num]);

  let navigate = useNavigate();
  return (
    <div className="container">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
      </InputGroup>
      <Col md={4}>
        <img src={props.sing[id].img} alt="앨범 사진" width="100%" />
        <h4>{props.sing[id].title}</h4>
        <p>{props.sing[id].singer}</p>
      </Col>
    </div>
  );
}

export default Detail;
