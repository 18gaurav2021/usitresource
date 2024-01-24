import React from "react";
import { useState } from "react";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [home, setHome] = useState(false);
  const [page, setPage] = useState(false);
  const [project, setProject] = useState(false);
  const [team, setTeam] = useState(false);
  const [service, setService] = useState(false);
  const [shop, setShop] = useState(false);
  const [news, setNews] = useState(false);
  

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
    setHome(false);
    setPage(false);
    setProject(false);
    setTeam(false);
    setNews(false);
    setShop(false);
  };
  const navigate = useNavigate();
  const openHire = () => {
    navigate("/hire");
    setMobileMenuVisible(false);
  };
  

  return (
    <body className={isMobileMenuVisible ? "mobile-menu-visible" : ""}>
      <div className="page-wrapper">
        {/* <!-- Main Header-->  */}
        <header className="fixed-top main-header header-style-one">
          <div className="logo-box">
            <div className="logo">
              {/* <Link to="/"> */}
              <a href="/">
                <img src={logo} height={10} width={100} alt="" />
              </a>
              {/* </Link> */}
            </div>
          </div>
          {/* <div className="header-top">
            <div className="top-left">
              <ul>
                <li>
                  <a href="">
                    <i className="fa-solid fa-location-dot"></i>Beverley Road
                    Brooklyn, USA
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-solid fa-envelope"></i>example@company.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="login-btn">
                <li className="active">
                  <a href="">
                    <i className="fa fa-user"></i>Login
                  </a>
                </li>
                <li>
                  <a href="">Sign up</a>
                </li>
              </ul>
              <ul className="social-icons">
                <li>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="header-lower">
            {/* <!-- Main box --> */}
            <div className="main-box">
              {/* <!--Nav Box--> */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    <li className="current dropdown">
                      {" "}
                      {/* <Link to="/"> */}
                      <a href="/">Home</a>
                      {/* </Link> */}
                      {/* <ul>
                        <li>
                          <a href="">Home page 01</a>
                        </li>
                        <li>
                          <a href="">Home page 02</a>
                        </li>
                      </ul> */}
                      <div className="dropdown-btn">
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </li>
                    {/* <li className="dropdown">
                      {" "}
                      <a href="">Pages</a>
                      <ul>
                        <li>
                          <a href="">About</a>
                        </li>
                        <li className="dropdown">
                          {" "}
                          <a href="">Projects</a>
                          <ul>
                            <li>
                              <a href="">Projects List</a>
                            </li>
                            <li>
                              <a href="">Project Details</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <i className="fa fa-angle-down"></i>
                          </div>
                        </li>
                        <li className="dropdown">
                          {" "}
                          <a href="">Team</a>
                          <ul>
                            <li>
                              <a href="">Team List</a>
                            </li>
                            <li>
                              <a href="">Team Details</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <i className="fa fa-angle-down"></i>
                          </div>
                        </li>
                        <li>
                          <a href="">Testimonial</a>
                        </li>
                        <li>
                          <a href="">Pricing</a>
                        </li>
                        <li>
                          <a href="">FAQ</a>
                        </li>
                        <li>
                          <a href="">Page 404</a>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </li> */}
                    <li className="dropdown">
                      {" "}
                      <a href="#services">Services</a>
                      <ul>
                        <li>
                          <a href="">Data Engineering</a>
                        </li>
                        <li>
                          <a href="">AI/ML</a>
                        </li>
                        <li>
                          <a href="">5G</a>
                        </li>
                        <li>
                          <a href="">Blockchain</a>
                        </li>
                        <li>
                          <a href="">IoT</a>
                        </li>
                        <li>
                          <a href="">Metaverse</a>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
                {/* <!-- Main Menu End-->  */}
              </div>
              <div className="btn" style= {{marginRight:"100px" }}>
                  {" "}
                  {/* <Link to=""> */}
                  <a href="/hire" className="theme-btn">
                    Hire Consultants
                  </a>
                  {" "}
                  {/* </Link> */}
                </div>
              <div className="outer-box">
                {" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="tel:123456789"
                  className="content-btn"
                >
                  {" "}
                  <i className="fa-solid fa-phone"></i>{" "}
                  <span>Call Anytime</span>
                  <h6
                    style={{ textDecoration: "none", marginTop: "2px" }}
                    className="title"
                  >
                    + 12 (3456) 7890
                  </h6>
                </a>
                
                <div className="your-container-class">
                  <button onClick={()=>navigate("/login")}
                   className="your-button-class" 
                   title="Login"
                   >
                    <i className="fa fa-user"></i>
                  
                  </button>
                </div>
             
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                  {" "}
                  <i
                    style={{ color: "#f09a6b" }}
                    className="fa fa-bars"
                  ></i>{" "}
                </div>
              </div>
            </div>
            {/* <!-- Mobile Menu  -->  */}
          </div>
          <div className="mobile-menu">
            <div className="menu-backdrop"></div>

            <nav className="menu-box">
              <div className="upper-box">
                <div className="nav-logo">
                  <a href="">
                    <img src={logo} width={100} height={50} alt="" title="" />
                  </a>
                </div>
                <div
                  onClick={openHire}
                  style={{
                    border: "2px solid grey",
                    backgroundColor: "black",
                    padding: "2px",
                    cursor: "pointer",
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <button style={{ color: "white", backgroundColor: "black" }}>
                    Hire
                  </button>
                </div>
                <div className="close-btn" onClick={toggleMobileMenu}>
                  <i className="icon fa fa-times"></i>
                </div>
              </div>
              <ul className="navigation clearfix">
                <li className="current dropdown">
                  {" "}
                  <a href="/">Home</a>
                  <ul style={{ display: home ? "block" : "none" }}>
                    <li>
                      <a href="">Home page 01</a>
                    </li>
                    <li>
                      <a href="">Home page 02</a>
                    </li>
                  </ul>
                  <div
                    className={home ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => setHome(!home)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </div>
                </li>

                <li className="dropdown">
                  {" "}
                  <a href="">Services</a>
                  <ul style={{ display: service ? "block" : "none" }}>
                    <li>
                      <a href="">Services List</a>
                    </li>
                    <li>
                      <a href="">Service Details</a>
                    </li>
                  </ul>
                  <div
                    className={service ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => setService(!service)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </div>
                </li>
                {/* <li className="dropdown">
                  {" "}
                  <a href="">Shop</a>
                  <ul style={{ display: shop ? "block" : "none" }}>
                    <li>
                      <a href="">Products</a>
                    </li>
                    <li>
                      <a href="">Products with Sidebar</a>
                    </li>
                    <li>
                      <a href="">Product Details</a>
                    </li>
                    <li>
                      <a href="">Cart</a>
                    </li>
                    <li>
                      <a href="">Checkout</a>
                    </li>
                  </ul>
                  <div
                    className={shop ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => setShop(!shop)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </div>
                </li> */}
                {/* <li className="dropdown">
                  {" "}
                  <a href="">News</a>
                  <ul style={{ display: news ? "block" : "none" }}>
                    <li>
                      <a href="">News Grid</a>
                    </li>
                    <li>
                      <a href="">News Details</a>
                    </li>
                  </ul>
                  <div
                    className={news ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => setNews(!news)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </div>
                </li> */}
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
              <ul className="contact-list-one">
                <li>
                  <div className="contact-info-box">
                    {" "}
                    <i className="icon lnr-icon-phone-handset"></i>{" "}
                    <span className="title">Call Now</span>{" "}
                    <a href="tel:+92880098670">+92 (8800) - 98670</a>{" "}
                  </div>
                </li>
                <li>
                  <div className="contact-info-box">
                    {" "}
                    <span className="icon lnr-icon-envelope1"></span>{" "}
                    <span className="title">Send Email</span>{" "}
                    <a href="mailto:help@company.com">help@company.com</a>{" "}
                  </div>
                </li>
                <li>
                  <div className="contact-info-box">
                    {" "}
                    <span className="icon lnr-icon-clock"></span>{" "}
                    <span className="title">Send Email</span> Mon - Sat 8:00 -
                    6:30, Sunday - CLOSED{" "}
                  </div>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* <!--End Main Header --> */}
      </div>
    </body>
  );
}
