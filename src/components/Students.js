import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectStudents, fetchAllStudents, deleteStudentAsync } from "../features/students/studentSlice";
import { StudentForm } from "./StudentForm";

export const Students = () => {
  const students = useSelector(selectStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  const handleDelete = async (event, studentId) => {
    event.preventDefault();

    try {
      await dispatch(deleteStudentAsync(studentId));
    } catch (err) {
      console.log("Error in Students.js handleDelete");
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      <h2>Students</h2>
      <StudentForm />
      {students && students.length
        ? students.map((student) => (
            <div key={student.id}>
              <h3 key={student.id}>Student:</h3>
              <Link to={`/students/${student.id}`} key={`All Students: ${student.id}`}>
                <div className="student row" key={student.id}>
                  <div>
                    <h3>First Name: {student.firstName}</h3>
                    <h3>Last Name: {student.lastName}</h3>
                    <img src={student.imageUrl} height={300} width={300} />
                  </div>
                </div>
              </Link>
              <form typeof="submit" onSubmit={(event) => handleDelete(event, student.id)}>
                <button>Submit</button>
              </form>
            </div>
          ))
        : null}
    </div>
  );
};
