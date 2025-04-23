import React, { useState } from 'react';
import useFetchData from './useFetchData';
import { Container, Form } from 'react-bootstrap';

const ItineraryForm = () => {
  const { hostels } = useFetchData();
  const [formData, setFormData] = useState({
    user: '',
    startDate: '',
    stages: [],
  });

  const handleStageChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStages = [...formData.stages];
    
    const selectedHostel = hostels.find((hostel) => hostel.id === value);
  
    updatedStages[index] = {
      ...updatedStages[index],
      [name]: value,
      hostel: selectedHostel ? selectedHostel.name : '',
    };
    
    setFormData({
      ...formData,
      stages: updatedStages,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddStage = () => {
    const newStageNumber = formData.stages.length + 1;

    setFormData({
      ...formData,
      stages: [...formData.stages, { stage: newStageNumber, hostelId: 'all', hostel: '', nights: '' }],
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('itineraryData', JSON.stringify(formData));
    window.location.reload();
  };

  return (
    <Container className="mt-4">
      <form>
        <div className="mb-3">
          <label className="form-label">
            User:
            <input
              type="text"
              className="form-control"
              name="user"
              value={formData.user}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Start Date:
            <input
              type="date"
              className="form-control"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <h3>Stages:</h3>
        {formData.stages.map((stage, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">
              Stage:
              <input
                type="text"
                className="form-control"
                name="stage"
                value={stage.stage}
                readOnly
              />
            </label>
            <label className="form-label">
              Hostel:
              <Form.Select
                className="form-control"
                name="hostelId"
                value={stage.hostelId}
                onChange={(e) => handleStageChange(index, e)}
              >
                {hostels.map((hostel) => (
                  <option key={hostel.id} value={hostel.id}>
                    {hostel.name}
                  </option>
                ))}
              </Form.Select>
            </label>
            <label className="form-label">
              Nights:
              <input
                type="text"
                className="form-control"
                name="nights"
                value={stage.nights}
                onChange={(e) => handleStageChange(index, e)}
              />
            </label>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={handleAddStage}>
          Add Stage
        </button>
        <br />
        <button type="button" className="btn btn-success mt-3" onClick={handleSubmit}>
          Save Itinerary
        </button>
      </form>
    </Container>
  );
};

export default ItineraryForm;
