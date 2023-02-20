import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSingleCampus, selectSingleCampus } from "../features/singleCampusSlice";
import { useDispatch, useSelector } from "react-redux";
import EditCampus from "./EditCampus";
import { unregisterStudentAsync, registerStudentAsync } from "../features/singleStudentSlice";

export const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();

  const singleCampus = useSelector(selectSingleCampus);

  const { name, imageUrl, address, description, students } = singleCampus;

  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

  const handleUnregistered = async (studentId) => {
    await dispatch(unregisterStudentAsync({ studentId, campusId: null }));
    window.location.reload(true);
  };

  const handleRegistered = async (studentId) => {
    await dispatch(registerStudentAsync({ studentId, campusId }));
    window.location.reload(true);
  };

  return (
    <div>
      <h3>Campus</h3>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Description: {description}</p>
      <img src={imageUrl} />
      {students && students.length ? (
        students.map((student) => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`} key={student.id}>
              <p>
                Student Name: {student.firstName} {student.lastName}
              </p>
            </Link>
            <button type="button" onClick={() => handleUnregistered(student.id)}>
              Unregister Student
            </button>
            <button type="button" onClick={() => handleRegistered(student.id)}>
              Register Student
            </button>
          </div>
        ))
      ) : (
        <p>{name} has no enrolled students.</p>
      )}
      <EditCampus campusId={campusId} />
    </div>
  );
};

export default SingleCampus;
