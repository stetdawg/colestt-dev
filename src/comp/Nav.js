import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom'
import '../css/nav.css'

/*
<Link to="/">
The <Link > component creates links in our application. <Link> is
rendered as an anchor <a> tag in our HTML document

Example:
----------------
<NavLink to="/react" activeClassName="hurray">
  React
</NavLink>

When the URL is /react, this renders:
<a href="/react" className="hurray">React</a>
--------------

*/

export default class Nav extends Component {
    render() {
        return (
            <nav className="navRouter">
              <div className="nav-container">
                <div className="nav-logo">
                  Cole's
                </div><ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Shop">Shop</Link>
                  </li>
                  <li>
                  {/* This will be a child element of Shop */}
                    <Link to="/Combos"> Combos</Link>
                  </li>
                  <li>
                    <Link to="/About">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
        )
    }
}
