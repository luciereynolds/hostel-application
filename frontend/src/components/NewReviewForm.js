import React, { useState } from "react";
import useFetchData from "./useFetchData";
import { Form, Button } from "react-bootstrap";

const NewReviewForm = ({ onAddReview }) => {
  const [reviewer, setReviewer] = useState("");
  const [review, setReview] = useState("");
  const { hostels } = useFetchData();
  const [selectedHostelId, setSelectedHostelId] = useState("all");

  const handleAddReview = () => {
    onAddReview({ reviewer, review });

    setReviewer("");
    setReview("");
  };

  return (
    <Form>
    <Form.Group className="mb-3">
    <Form.Select
              value={selectedHostelId}
              onChange={(e) => setSelectedHostelId(e.target.value)}
            >
              {hostels.map((hostel) => (
                <option key={hostel.id} value={hostel.id}>
                  {hostel.name}
                </option>
              ))}
            </Form.Select>
    </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Reviewer</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter reviewer's name"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" onClick={handleAddReview}>
        Add Review
      </Button>
    </Form>
  );
};

export default NewReviewForm;