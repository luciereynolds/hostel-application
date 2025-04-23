import { useEffect, useState, useCallback } from "react";

const useFetchData = () => {
  const [status, setStatus] = useState('idle');
  const [hostels, setHostels] = useState([
    {
      id: "",
      name: "",
      address: "",
      postcode: "",
      phone: "",
      email: "",
      description: "",
      cafe: "",
      location: {lat: "", long:""},
      ratings: [],
      reviews: [
        {
          reviewer: "",
          review: ""
        }
      ]
    }
  ]);

  const fetchData = useCallback(() => {
    const url = "http://localhost:3001/hostels";
    fetch(url)
      .then((response) => response.json())
      .then((incomingData) => {
        const hostelsWithCafe = incomingData.map((hostel) => ({
          ...hostel,
          cafe: !!hostel.cafe
        }));

        setHostels(hostelsWithCafe);
        setStatus('fetched');
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { status, hostels };
};

export default useFetchData;
