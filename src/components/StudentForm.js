import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../features/studentSlice";

import { selectCampuses } from "../features/campusSlice";

export const StudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState(0);
  const [campus, setCampus] = useState("");

  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();

  const handleFirstName = (value) => {
    setFirstName(value);
  };

  const handleLastName = (value) => {
    setLastName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleGpa = (value) => {
    setGpa(value);
  };

  const handleCampus = (value) => {
    setCampus(value);
  };

  const handleSubmit = async () => {
    const formData = {
      firstName,
      lastName,
      email,
      gpa,
      campus,
    };

    let newStudent = await axios.post(`/api/students`, formData);

    dispatch(updateState({ data: newStudent.data }));
  };

  return (
    <div>
      <input
        placeholder="Enter First Name"
        onChange={(e) => (e.target.value ? handleFirstName(e.target.value) : null)}
      />
      <input placeholder="Enter Last Name" onChange={(e) => (e.target.value ? handleLastName(e.target.value) : null)} />
      <input
        placeholder="Enter Email Address"
        onChange={(e) => (e.target.value ? handleEmail(e.target.value) : null)}
      />
      <input placeholder="Enter GPA" onChange={(e) => (e.target.value ? handleGpa(e.target.value) : null)} />

      <select onChange={(e) => handleCampus(e.target.value)}>
        <option value="">Select School</option>
        {campuses.map((campus) => {
          return (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
          );
        })}
      </select>

      <button onClick={() => handleSubmit()}>Create Student</button>
    </div>
  );
};

export default StudentForm;
