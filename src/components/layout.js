import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = ({ children, navData }) => {
  const navItems = React.useMemo(
    () =>
      navData.map((item) => (
        <Link key={item.slug} className="navItem" to={item.slug}>
          {item.title}
        </Link>
      )),
    [navData]
  );

  // const contentItems = React.useMemo(
  //   () =>
  //     children.map((item) => (
  //       <Link key={item.id} className="contentItem" to={item.id}>
  //         <img
  //           src={student.imageUrl}
  //           alt={`Class photo of ${student.firstName} ${student.lastName}`}
  //         />
  //         <span>{`${student.firstName} ${student.lastName}`}</span>
  //       </Link>
  //     )),
  //   [children]
  // );

  return (
    <div className="containerLayout">
      <nav className="navBar">{navItems}</nav>
      <div className="content">{children}</div>
    </div>
  );
};
