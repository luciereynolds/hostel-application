import React, { useState } from "react";
import useFetchData from "./useFetchData";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Item from "./Ratings";
import NewReviewForm from "./NewReviewForm";

const HostelViewer = () => {
  const { status, hostels } = useFetchData();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedHostelId, setSelectedHostelId] = useState("all");
  const [hasCafe, setHasCafe] = useState(false);

  if (status === 'idle' || status === 'fetched') {
    const filteredHostels = hostels.filter((hostel) => {
      if (hasCafe) {
        return hostel.cafe;
      }
      return true;
    });

    const handleAddReview = (newReview) => {
      // logs the review to the console. Unfortunately did not manage to get it linked to the backend to insert new reviews.
      console.log("New Review:", newReview);
  
      // Closes the review form after being submitted.
      setShowReviewForm(false);
    };

    return (
      <Container className="mt-4">
        <h2>All Hostels:</h2>
        <Row className="mb-3">
          <Col>
            <Form.Check
              type="checkbox"
              label="Only show hostels with a cafe"
              checked={hasCafe}
              onChange={() => setHasCafe(!hasCafe)}
            />
          </Col>
          <Col>
            <Form.Select
              value={selectedHostelId}
              onChange={(e) => setSelectedHostelId(e.target.value)}
            >
              <option value="all">All Hostels</option>
              {filteredHostels.map((hostel) => (
                <option key={hostel.id} value={hostel.id}>
                  {hostel.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {showReviewForm && (
        <NewReviewForm onAddReview={handleAddReview} />
      )}

<Button 
  variant={showReviewForm ? "danger" : "success"} 
  onClick={() => setShowReviewForm(!showReviewForm)}
>
  {showReviewForm ? "Cancel" : "Add Review"}
</Button>


        {selectedHostelId === "all" ? (
          filteredHostels.map((hostel, index) => (
            <div key={hostel.id} className="mb-4">
              <h3 className="hostel-name-background">{hostel.name}</h3>
              <Item item={hostel} index={index} />
              <Row className="border-top pt-3">
                <Col>
                  <p>Address: {hostel.address}</p>
                  <p>Postcode: {hostel.postcode}</p>
                  <p>Phone: {hostel.phone}</p>
                  <p>Email: {hostel.email}</p>
                </Col>
              </Row>
              <Row className="border-top pt-3">
                <Col>
                  <p>Description: {hostel.description}</p>
                  <p>Cafe: {hostel.cafe ? "Yes" : "No"}</p>
                </Col>
              </Row>
              <Row className="border-top pt-3">
                <Col>
                  <h4>Reviews:</h4>
                  {hostel.reviews.map((review, index) => (
                    <div key={index}>
                      <p>Reviewer: {review.reviewer}</p>
                      <p>Review: {review.review}</p>
                      {index < hostel.reviews.length - 1 && <hr />}
                    </div>
                  ))}
                </Col>
              </Row>
              <hr />
            </div>
          ))
        ) : selectedHostelId ? (
          <ReviewsViewer hostelId={selectedHostelId} />
        ) : null}
      </Container>
    );
  } else {
    return <p>Loading...</p>;
  }
};

const ReviewsViewer = ({ hostelId }) => {
  const hostel = useFetchData().hostels.find((h) => h.id === hostelId);

  if (!hostel) {
    return <p>Hostel not found</p>;
  }

  return (
    <Container className="mt-4">
      <h2 className="hostel-name-background">{hostel.name}:</h2>
      <p>Description: {hostel.description}</p>
      <p>Postcode: {hostel.postcode}</p>
      <p>Cafe: {hostel.cafe ? "Yes" : "No"}</p>
      <h4>Reviews:</h4>
      {hostel.reviews.map((review, index) => (
        <div key={index}>
          <p>Reviewer: {review.reviewer}</p>
          <p>Review: {review.review}</p>
          {index < hostel.reviews.length - 1 && <hr />}
        </div>
      ))}
    </Container>
  );
};

export default HostelViewer;
