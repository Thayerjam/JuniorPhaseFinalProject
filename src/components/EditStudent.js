import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editStudentAsync } from "../features/singleStudentSlice";
import { fetchAllCampuses, selectCampuses } from "../features/campusSlice";

export const EditStudent = ({ studentId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [gpa, setGpa] = useState("");
  const [campus, setCampus] = useState("");

  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();

  const handleUpdate = async (event) => {
    try {
      event.preventDefault();

      await dispatch(editStudentAsync({ firstName, lastName, email, gpa, campus, studentId }));
    } catch (err) {
      console.log("Error in EditStudent.js handleUpdate");
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      <h3>Edit Student</h3>
      <form id="studentUpdateForm" onSubmit={handleUpdate}>
        <label htmlFor="studentFirstName">Student First Name:</label>
        <input
          placeholder="student first name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="studentLastName">Student Last Name:</label>
        <input
          placeholder="student last name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="studentEmail">Student Email:</label>
        <input placeholder="student email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="studentGpa">Student Gpa:</label>
        <input placeholder="student gpa" name="gpa" value={gpa} onChange={(e) => setGpa(e.target.value)} />

        <select onChange={(e) => setCampus(e.target.value)}>
          <option value="">Choose School</option>
          {campuses.map((campus) => {
            return (
              <option key={campus.id} value={campus.id}>
                {campus.name}
              </option>
            );
          })}
        </select>

        <button type="submit">Submit Student Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
