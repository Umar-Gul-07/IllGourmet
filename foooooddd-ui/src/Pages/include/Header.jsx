import React from "react";

function Header() {
  return (
    <>
      <header style={{ backgroundColor: 'black' }}>
        <div className="container-fluid">
          <div className="header-content d-flex flex-wrap align-items-center">
            <div className="logo">
              <a href="/" title="">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>
            {/*logo end*/}
            <nav>
              <ul>
                <li>
                  <a className="active" href="/" title="">
                    Home
                  </a>
                </li>
                
                <li className="menu-has-items">
                  <a href="/manue" title="">
                    Manue
                  </a>
                   
                </li>
                
                 
              </ul>
            </nav>
            {/*navigation end*/}
            <div className="menu-btn">
              <span className="bar1" />
              <span className="bar2" />
              <span className="bar3" />
            </div>
            {/*menu-bar end*/}
            <ul className="oth-lnks ml-auto">
              <li>
                <img src="assets/images/icons/phone.svg" alt="" />
                +92 3032323434
              </li>
              <li>
                <a href="#" title="" className="search-icon">
                  <img src="assets/images/icons/search.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="" className="cart-ico">
                  <img src="assets/images/icons/cart.svg" alt="" />
                </a>
                <span className="cart-item-num">0</span>
              </li>
              <li>
                <a href="sign-in.html" title="" className="cart-ico">
                  Sign in <img src="assets/images/icons/sign-in.svg" alt="" />
                </a>
              </li>
            </ul>
            {/*oth-lnks end*/}
          </div>
          {/*header-content end*/}
          <div className="search-bar">
            <div className="container">
              <form>
                <input type="text" name="search" placeholder="Search" />
              </form>
            </div>
          </div>
          {/*search-bar end*/}
        </div>
      </header>
    </>
  );
}

export default Header;
