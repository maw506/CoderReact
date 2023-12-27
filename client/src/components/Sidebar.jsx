import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <aside className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {/* <div className="hamburger-icon" onClick={toggleSidebar}>
          &#9776;
        </div> 
        ESTO ES PARA AGREAGR A FUTUTRO LA HAMBURGUESA RESPONSIVE DE LA SIDEBAR*/}
        <nav className="sidebar-nav">
          <header>
            <b>OPCIONES</b>
          </header>
          <ul>
            <li>
              <p>
                <i className="bi bi-list-stars"></i>
                <span>CATEGORIAS</span>
              </p>
              <ul className="nav-flyout">
                <Link to={"/"}>
                  <li>
                    <p>TODO</p>
                  </li>
                </Link>
                <Link to={"/categoria/1"}>
                  <li>
                    <p>CAMARAS</p>
                  </li>
                </Link>
                <Link to={"/categoria/2"}>
                  <li>
                    <p>FLASHES</p>
                  </li>
                </Link>
                <Link to={"/categoria/3"}>
                  <li>
                    <p>LENTES</p>
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                <i class="bi bi-person-bounding-box"></i>
                <span>MI CUENTA</span>
              </p>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
