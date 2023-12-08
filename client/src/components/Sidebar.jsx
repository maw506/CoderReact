import { useState } from "react";

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
            <b>NOMBRE DE LA MARCA</b>
          </header>
          <ul>
            <li>
              <p>
                <i class="bi bi-list-stars"></i>
                <span>CATEGORIAS</span>
              </p>
              <ul className="nav-flyout">
                <li>
                  <p>MONITORES</p>
                </li>
                <li>
                  <p>PERIFERICOS</p>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
