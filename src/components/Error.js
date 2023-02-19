import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div>
            <h1>Error Alert!!</h1>
            <p>Return to...</p>
            <Link to="/students">Students</Link>
            <Link to="/campuses">Campuses</Link>
        </div>
    );
};