const Header = () => {
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
            data-toggle="collapse"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="javascript:;" className="nav-link">
                <i className="material-icons">shopping_cart</i>
                Checkout
              </a>
            </li>
            <li className="nav-item">
              <a href="javascript:;" className="nav-link">
                <i className="material-icons">auto_delete</i>
                Trash
              </a>
            </li>
            <li className="nav-item">
              <a href="javascript:;" className="nav-link">
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
