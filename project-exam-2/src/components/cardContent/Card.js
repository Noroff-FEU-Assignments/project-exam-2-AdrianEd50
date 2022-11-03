import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ipad from "../../images/ipad.jpg";
import homeImg from "../../images/elkjøp.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardContent() {
  return (
    <>
      <Container classname="container" fluid="md">
        <Row>
          <Col>
            <Card className="card" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Img variant="top" className="home-img" src={homeImg} />
                <Card.Title className="post">Posted a new post</Card.Title>
                <Card.Text>1d</Card.Text>
                <Card.Text>iPad 10,9" (2022) 256GB 5G (blå)</Card.Text>
                <br />
                <Button variant="primary" className="card-button">
                  View
                </Button>
              </Card.Body>
              <Card.Img variant="top" className="ipad-img" src={ipad} />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Img variant="top" className="home-img" src={homeImg} />
                <Card.Title className="post">Posted a new post</Card.Title>
                <Card.Text>1d</Card.Text>
                <Card.Text>iPad 10,9" (2022) 256GB 5G (blå)</Card.Text>
                <br />
                <Button variant="primary" className="card-button">
                  View
                </Button>
              </Card.Body>
              <Card.Img variant="top" className="ipad-img" src={ipad} />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Img variant="top" className="home-img" src={homeImg} />
                <Card.Title className="post">Posted a new post</Card.Title>
                <Card.Text>1d</Card.Text>
                <Card.Text>iPad 10,9" (2022) 256GB 5G (blå)</Card.Text>
                <br />
                <Button variant="primary" className="card-button">
                  View
                </Button>
              </Card.Body>
              <Card.Img variant="top" className="ipad-img" src={ipad} />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Img variant="top" className="home-img" src={homeImg} />
                <Card.Title className="post">Posted a new post</Card.Title>
                <Card.Text>1d</Card.Text>
                <Card.Text>iPad 10,9" (2022) 256GB 5G (blå)</Card.Text>
                <br />
                <Button variant="primary" className="card-button">
                  View
                </Button>
              </Card.Body>
              <Card.Img variant="top" className="ipad-img" src={ipad} />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Img variant="top" className="home-img" src={homeImg} />
                <Card.Title className="post">Posted a new post</Card.Title>
                <Card.Text>1d</Card.Text>
                <Card.Text>iPad 10,9" (2022) 256GB 5G (blå)</Card.Text>
                <br />
                <Button variant="primary" className="card-button">
                  View
                </Button>
              </Card.Body>
              <Card.Img variant="top" className="ipad-img" src={ipad} />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Img variant="top" className="home-img" src={homeImg} />
                <Card.Title className="post">Posted a new post</Card.Title>
                <Card.Text>1d</Card.Text>
                <Card.Text>iPad 10,9" (2022) 256GB 5G (blå)</Card.Text>
                <br />
                <Button variant="primary" className="card-button">
                  View
                </Button>
              </Card.Body>
              <Card.Img variant="top" className="ipad-img" src={ipad} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardContent;
