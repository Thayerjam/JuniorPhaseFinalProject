import React from 'react';
import { StudentShort } from './studentShort';
import { CampusShort } from './campusShort';
import { Link } from 'react-router-dom';

const studentRenderer = (student) => {
  return (
    <Link key={student.id} to={`student:${student.id}`}>
      <StudentShort student={student} />
    </Link>
  );
};

const campusRenderer = (campus) => {
  return (
    <Link key={student.id} to={`campus:${campus.id}`}>
      <CampusShort campus={campus} />
    </Link>
  );
};

export const ListView = ({ data, type }) => {
  const itemRenderer = type === 'students' ? studentRenderer : campusRenderer;

  return (
    <div className="listContainer">
      <ul>{data.map((item) => itemRenderer(item))}</ul>
    </div>
  );
};
