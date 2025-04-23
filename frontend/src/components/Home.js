import React from "react";
import useFetchData from "./useFetchData";
import Search from "./Search";
import Map from "./Map";

const Home = () => {
  const {status, hostels} = useFetchData();
  if (status==='fetched')
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col p-3 mx-2"><h3>Hostels Map: </h3> 
       <Map />
      </div>
        <div className="col p-3 mx-2">
        <h3>Search our hostels </h3>
          <Search hostels={hostels} />
        </div>

      </div>
    </div>
  );
};

export default Home;