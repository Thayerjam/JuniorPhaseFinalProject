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
  const [option, setOption] = useState("");

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

  const handleOption = (value) => {
    setOption(value);
  };

  const handleSubmit = async () => {
    const formData = {
      firstName,
      lastName,
      email,
      gpa,
      option,
    };

    let newStudent = await axios.post(`/api/students`, formData);

    dispatch(updateState({ data: newStudent.data }));
  };

  return (
    <div>
      <input placeholder="Enter First Name" onChange={(e) => handleFirstName(e.target.value)} />
      <input placeholder="Enter Last Name" onChange={(e) => handleLastName(e.target.value)} />
      <input placeholder="Enter Email Address" onChange={(e) => handleEmail(e.target.value)} />
      <input placeholder="Enter GPA" onChange={(e) => handleGpa(e.target.value)} />

      <select onChange={(e) => handleOption(e.target.value)}>
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
