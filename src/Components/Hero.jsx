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
              src={props.item.imageUrl}
              width={"200px"}
              height={"250px"}
            />
          </Col>
          <Col style={{ paddingTop: "20px" }}>
            <span style={{ fontSize: "20px" }}>
              <FaLocationDot />
              {props.item.location}
            </span>
            <h1>{props.item.title}</h1>
            <h4>
              {props.item.startDate}-{props.item.endDate}
            </h4>
            <p>{props.item.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
