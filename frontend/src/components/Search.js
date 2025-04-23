import React, { useState } from "react";
import StyledHostelList from "./StyledHostelList"

function Search({ hostels }) {
   const [searchField, setSearchField] = useState("");

  const filtered = hostels.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase())|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <StyledHostelList hostels={filtered} />
      </div>
  
  );
}
export default Search;