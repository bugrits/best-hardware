const Footer = () => {
  return (
    <footer className="footer" data-background-color="black">
      <div className="container">
        <nav className="float-left">
          <ul>
            <li>
              <a href="#">VIJAO</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Licenses</a>
            </li>
          </ul>
        </nav>
        <div className="copyright float-right">
          &copy; 2021
          <script>document.write(new Date().getFullYear())</script>, made with{" "}
          <i className="material-icons">favorite</i> by
          <a href="#" target="_blank">
            ViJao
          </a>{" "}
          for Best Hardware.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
