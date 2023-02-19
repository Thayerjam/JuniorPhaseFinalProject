import React, { useEffect } from 'react';
import { fetchAllStudents, selectStudents } from '../features/students/studentSlice';
import { fetchAllCampuses, selectCampuses } from '../features/campuses/campusSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Link } from "react-router-dom";

import { Students, Campuses, SingleCampus, SingleStudent, Error, EditStudent, EditCampus } from "./";

export const Main = () => {
    const dispatch = useDispatch();
    const campuses = useSelector(selectCampuses);
    const students = useSelector(selectStudents);

    useEffect(() => {
        dispatch(fetchAllCampuses());
        dispatch(fetchAllStudents());
    }, [dispatch]);

    return (
        <div id="main">
            <div id="header">
                <h1>Campus Directory</h1>
            </div>
            <nav>
                <Link to="/students" id="studentsNavLink" className="navLink">Students({students.length})</Link>
                <Link to="/campuses" id="campusesNavLink" className="navLink">Campuses({campuses.length})</Link>
            </nav>

            <Routes>
                <Route path="/students" element={<Students />} />
                <Route path="/students/:studentId" element={<SingleStudent />} />
                <Route path="/campuses" element={<Campuses />} />
                <Route path="/campuses/:campusId" element={<SingleCampus />} />
                <Route path="/editStudent" element={<EditStudent />} />
                <Route path="/students/:studentId" element={<SingleStudent />} editStudent={EditStudent} />
                <Route path="/students/:studentId" element={<SingleCampus />} editCampus={EditCampus} />
                <Route path="/editCampus" element={<EditCampus />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};