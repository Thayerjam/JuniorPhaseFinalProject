import React from "react";
import { Link } from "react-router-dom";

const navData = [
  {
    title: "Students",
    slug: "/students",
  },
  {
    title: "Campuses",
    slug: "/campuses",
  },
];

export const Layout = (children) => {
  const navItems = React.useMemo(
    () =>
      navData.map((item) => (
        <Link key={item.slug} className="navItem" to={item.slug}>
          {item.title}
        </Link>
      )),
    [navData]
  );

  return (
    <div className="containerLayout">
      <nav className="navBar">{navItems}</nav>
      <div className="content">{children}</div>
    </div>
  );
};
