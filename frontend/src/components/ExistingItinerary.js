import React from 'react';

const ExistingItinerary = () => {
  const storedData = JSON.parse(localStorage.getItem('itineraryData'));

  if (!storedData) {
    return <div className="alert alert-info">No existing itineraries.</div>;
  }

  const labels = {
    user: 'Name',
    startDate: 'Start Date',
    stages: {
      stage: 'Stage',
      hostel: 'Hostel',
      nights: 'Nights',
    },
  };

  return (
    <div className="container mt-3">
      <h2>Existing Itinerary</h2>
      {Object.entries(storedData).map(([field, value]) => (
        <div className="mb-3" key={field}>
          {field === 'stages' ? (
            <div>
              {value.map((stage, index) => (
                <div className="card" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{`${labels[field].stage} ${stage.stage}`}</h5>
                    <p className="card-text">{`${labels[field].hostel}: ${stage.hostel}`}</p>
                    <p className="card-text">{`${labels[field].nights}: ${stage.nights}`}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : field === 'user' || field === 'startDate' ? (
            <p className="lead">{`${labels[field]}: ${value}`}</p>
          ) : (
            <p>{`${labels[field]}: ${JSON.stringify(value)}`}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExistingItinerary;
