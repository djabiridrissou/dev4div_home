

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="index.html"><img src="assets/img/logo.png" alt="logo" /></a>
        </div>

        <div className="menu">
          {/* desktop navbar */}
          <nav className="desktop-nav">
            <ul className="first-level">
              <li><a href="index.html" className="animsition-link">Home</a></li>
              <li><a href="about.html" className="animsition-link">about us</a></li>
              <li><a href="services.html" className="animsition-link">services</a></li>
              <li><a href="">portfolio</a>
                <ul className="second-level">
                  <li><a href="portfolio-1.html" className="animsition-link">portfolio list</a></li>
                  <li><a href="single-project.html" className="animsition-link">single project 1</a></li>
                  <li><a href="single-project-2.html" className="animsition-link">single project 2</a></li>
                </ul>
              </li>
              <li><a href="">blog</a>
                <ul className="second-level">
                  <li><a href="blog-1.html" className="animsition-link">posts list</a></li>
                  <li><a href="single-post.html" className="animsition-link">single post</a></li>
                </ul>
              </li>
              <li><a href="contact.html" className="animsition-link">contact us</a></li>
            </ul>
          </nav>
          {/* mobile navbar */}
          <nav className="mobile-nav"></nav>
          <div className="menu-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
