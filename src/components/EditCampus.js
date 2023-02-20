import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCampusAsync } from "../features/singleCampus/singleCampusSlice";

export const EditCampus = ({ campusId }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const handleUpdate = async (event) => {
    try {
      event.preventDefault();

      await dispatch(editCampusAsync({ campusId, name, address }));
    } catch (err) {
      console.log("Error in EditCampus.js handleUpdate");
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      <h3>Edit Student</h3>
      <form id="campusUpdateForm" onSubmit={handleUpdate}>
        <label htmlFor="name">Campus Name:</label>
        <input placeholder="campus name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="address">Campus Address:</label>
        <input
          placeholder="campus address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit">Submit Campus Update</button>
      </form>
    </div>
  );
};
