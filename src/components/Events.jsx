import Event from "./Event";
import events from "../events.json";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import NavigationBar from "./NavBar";
function Events() {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  }, []);

  const [show, setShow] = useState(false);
  const Buy = (event) => {
    setShow(true);
    event.nbTickets--;
    event.nbParticipants++;
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          {showWelcome && (
            <Alert variant="success"> Hey welcome to ESPRIT events</Alert>
          )}
          {events.map((element, index) => {
            return (
              <Col key={index} md={4}>
                <Event event={element} Buy={Buy} />
              </Col>
            );
          })}
          {show && <Alert variant="success">You have booked an event</Alert>}
        </Row>
      </Container>
    </>
  );
}

export default Events;
