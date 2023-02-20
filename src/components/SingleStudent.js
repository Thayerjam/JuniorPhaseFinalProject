import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSingleStudent, selectSingleStudent } from "../features/singleStudentSlice";
import { useDispatch, useSelector } from "react-redux";
import EditStudent from "./EditStudent";

export const SingleStudent = () => {
  const dispatch = useDispatch();
  const { studentId } = useParams();

  const singleStudent = useSelector(selectSingleStudent);

  const { firstName, lastName, email, imageUrl, gpa, campus } = singleStudent;

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

  const handleRegistered = async (studentId) => {
    await dispatch(registerStudentAsync({ studentId, campusId }));
    window.location.reload(true);
  };

  return (
    <div id="singleStudent">
      <h2>Student</h2>
      <p>
        Full Name: {firstName} {lastName}
      </p>
      <p>Email: {email}</p>
      <img src={imageUrl} />
      <p>GPA: {gpa}</p>
      <EditStudent studentId={studentId} />
      {campus ? (
        <div>
          <Link to={`/campuses/${campus.id}`}>
            <p>Campus Name: {campus.name}</p>
          </Link>
        </div>
      ) : (
        <p>
          {firstName} {lastName} is not currently available.
        </p>
      )}
    </div>
  );
};

export default SingleStudent;
