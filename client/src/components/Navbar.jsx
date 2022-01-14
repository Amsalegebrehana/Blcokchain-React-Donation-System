import React from 'react';

function Navbar(props) {
    return (
        <div>
            <header id="header">
            <div className="container main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <a href="/"><img src="img/donationlogo.jpg" alt title width={70} height={70}/></a>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                    <li><a href="/home">About</a></li>
                    {/* <li className="menu-has-children"><a href>Pages</a>
                        <ul> */}
                        <li><a href="/charities">Charities</a> </li>
                        {/* </ul>
                    </li> */}
                    <li className="menu-has-children"><a href>Blog</a>
                        <ul>
                        <li><a href="blog-home.html">Blog Home</a></li>
                        <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                    </li>
                    <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                </div>
            </div>
            </header>

        </div>
    );
}

export default Navbar;