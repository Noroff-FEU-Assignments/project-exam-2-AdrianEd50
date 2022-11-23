import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import message from "../../images/message.jpg";
import smiling from "../../images/smiling.png";
import love from "../../images/love.png";
import emoji from "../../images/emoji.png";
import angry from "../../images/angry.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Textarea from "../home/TextArea";

function CardContent() {
  return (
    <>
      <Container className="container" fluid="md">
        <Row>
          <Col>
            <Card className="card" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title className="post"></Card.Title>
              </Card.Body>
              <Card.Img variant="top" className="ipad-img" src={message} />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title className="post"></Card.Title>
              </Card.Body>
              <Textarea />
              <Button>Post</Button>
              <Button>Coment</Button>
              <Card.Img variant="top" className="emoji-img" src={smiling} />
              <Card.Img variant="top" className="emoji-img" src={love} />
              <Card.Img variant="top" className="emoji-img" src={angry} />
              <Card.Img variant="top" className="emoji-img" src={emoji} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardContent;
