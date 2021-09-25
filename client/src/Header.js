import { useState } from "react";

const Header = () => {
  const [showToggleMenu, setShowToggleMenu] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="#0">
            BEST HARDWARE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowToggleMenu(true)}
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={
            (showToggleMenu ? "show" : "") + " collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="material-icons">shopping_cart</i>
                Checkout
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="material-icons">auto_delete</i>
                Trash
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="material-icons">settings</i>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
