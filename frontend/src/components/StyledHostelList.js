import React from "react";
import StyledItem from "./StyledItem";
import Accordion from "react-bootstrap/Accordion";


const Hostels = ({ hostels }) => {
  return (
    <Accordion>
      {hostels.map((hostel, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <StyledItem item={hostel} index={index} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default Hostels;