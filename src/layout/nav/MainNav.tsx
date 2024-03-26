import { Link, useLocation } from "react-router-dom";
// import Burger from "./Burger";

const MainNav = () => {
  const location = useLocation();
  const filter = location.pathname.split("/")[1];

  const mainNavPaths = [
    { title: "home", path: "/" },
    { title: "projects", path: "/projects" },
    { title: "about", path: "/about" },
  ];

  return (
    <nav className="nav">
      {/* <Burger /> */}
      {mainNavPaths.map(({ title, path }, idx) => (
        <Link
          key={idx}
          to={path}
          style={{
            color:
              title === filter || (title === "home" && filter === "")
                ? "#fafafa"
                : "#737373",
          }}
          className="nav-link"
        >
          <span>{title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
