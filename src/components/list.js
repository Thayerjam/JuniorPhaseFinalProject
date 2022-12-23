import React from "react";
import { StudentShort } from "./studentShort";
import { CampusShort } from "./campusShort";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const studentRenderer = (student) => {
  return (
    <Link key={student.id} to={`student:${student.id}`}>
      <StudentShort student={student} />
    </Link>
  );
};

const campusRenderer = (campus) => {
  return (
    <Link key={campus.id} to={`campus:${campus.id}`}>
      <CampusShort campus={campus} />
    </Link>
  );
};

export const ListView = (type) => {
  const data = useSelector((state) => {
    return state.data[type];
  });
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const itemRenderer = type === "students" ? studentRenderer : campusRenderer;
  if (!data?.length) {
    return <span>No Data Found</span>;
  }
  return (
    <div className="listContainer">
      <ul>{data.map((item) => itemRenderer(item))}</ul>
    </div>
  );
};
