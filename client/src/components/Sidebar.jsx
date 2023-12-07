import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <header>
            <b>{getRol(dataUser.user_rol)}</b>
          </header>
          <ul>
            <li>
              <a href="#">
                <i class="bi bi-calendar-week"></i>
                <span>CATEGORIAS</span>
              </a>
              <ul className="nav-flyout">
                <li>
                  <Link>
                    <p>MONITORES</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p>PERIFERICOS</p>
                  </Link>
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
