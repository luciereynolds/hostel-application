import React from "react";
import NewItineraryForm from "./NewItineraryForm";
import ExistingItinerary from "./ExistingItinerary";
import { Col, Row, Card } from "react-bootstrap";

const DisplayItinerary = () => {
  const cardTitleStyle = {
    background: "#3d9962",
    color: "white",
    padding: "0.5rem", 
    borderRadius: "0.25rem", 
  };

  return (
    <div className="container-fluid mt-4">
      <Row className="mx-2">
        <h2 className="mx-2 p-2">Create & View your Itinerary:</h2>
        <Col xs={12} lg={5} className="mx-auto mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="mb-4" style={cardTitleStyle}>
                Add Itinerary
              </Card.Title>
              <NewItineraryForm /> 
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={5} className="mx-auto mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="mb-4" style={cardTitleStyle}>
                Existing Itinerary
              </Card.Title>
              <ExistingItinerary />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DisplayItinerary;
