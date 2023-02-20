import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateState } from "../features/campusSlice";

export const CampusForm = () => {
  const [campusName, setCampusName] = useState("");
  const [campusAddress, setCampusAddress] = useState("");
  const [campusDescription, setCampusDescription] = useState("");

  const dispatch = useDispatch();

  const handleCampusNameChange = (value) => {
    setCampusName(value);
  };

  const handleCampusAddressChange = (value) => {
    setCampusAddress(value);
  };

  const handleCampusDescriptionChange = (value) => {
    setCampusDescription(value);
  };

  const handleSubmit = async () => {
    const formData = {
      name: campusName,
      address: campusAddress,
      description: campusDescription,
    };
    let newCampus = await axios.post(`/api/campuses/`, formData);

    dispatch(updateState({ data: newCampus.data }));
  };
  return (
    <div>
      <input placeholder="Enter Campus Name" onChange={(e) => handleCampusNameChange(e.target.value)} />
      <input placeholder="Enter Campus Address" onChange={(e) => handleCampusAddressChange(e.target.value)} />
      <input placeholder="Enter Campus Description" onChange={(e) => handleCampusDescriptionChange(e.target.value)} />
      <button onClick={() => handleSubmit()}>Create Campus</button>
    </div>
  );
};
