import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCampusAsync } from "../features/singleCampusSlice";

export const EditCampus = ({ campusId }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleUpdate = async (event) => {
    try {
      event.preventDefault();

      await dispatch(editCampusAsync({ campusId, name, address, description }));
    } catch (err) {
      console.log("Error in EditCampus.js handleUpdate");
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      <h3>Edit Campus</h3>
      <form id="campusUpdateForm" onSubmit={handleUpdate}>
        <label htmlFor="name">Campus Name:</label>
        <input placeholder="campus name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="address">Campus Address:</label>
        <input
          placeholder="campus address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="description">Campus Description:</label>
        <input
          placeholder="campus description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit Campus Update</button>
      </form>
    </div>
  );
};

export default EditCampus;
