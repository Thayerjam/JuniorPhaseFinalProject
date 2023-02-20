import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectCampuses, fetchAllCampuses, deleteCampusAsync } from "../features/campusSlice";
import { CampusForm } from "./CampusForm";

export const Campuses = () => {
  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  const handleDelete = async (event, campusId) => {
    event.preventDefault();

    try {
      await dispatch(deleteCampusAsync(campusId));
    } catch (err) {
      console.log("Error in campuses.js handleDelete");
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      <h2>Campuses</h2>
      <CampusForm />
      {campuses && campuses.length
        ? campuses.map((campus) => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`} key={`All Campuses: ${campus.id}`}>
                <div className="campus row">
                  <h3>{campus.name}</h3>
                  <img src={campus.imageUrl} height={300} width={300} />
                </div>
              </Link>
              <form typeof="submit" onSubmit={(event) => handleDelete(event, campus.id)}>
                <button>X</button>
              </form>
            </div>
          ))
        : null}
    </div>
  );
};

export default Campuses;
