import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLocationDot } from "react-icons/fa6";

const Hero = (props) => {
  return (
    <div className="py-5" style={{ maxWidth: "650px", marginLeft:"30px" }}>
      <Container>
        <Row xs={2}>
          <Col>
            <img
              style={{ borderRadius: "10px" }}
              src={props.imageUrl}
              width={"200px"}
              height={"290px"}
            />
          </Col>
          <Col style={{ paddingTop: "20px" }}>
            <span style={{ fontSize: "20px" }}>
              <FaLocationDot />
              {props.location}
            </span>
            <h1>{props.title}</h1>
            <h4>
              {props.startDate}-{props.endDate}
            </h4>
            <p>{props.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
