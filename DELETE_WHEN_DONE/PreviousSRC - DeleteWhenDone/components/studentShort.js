import React from 'react';

export const StudentShort = ({ student }) => (
  <div>
    <img src={student.imageUrl} alt={`Class photo of ${student.firstName} ${student.lastName}`} />
    <span>{`${student.firstName} ${student.lastName}`}</span>
  </div>
);
