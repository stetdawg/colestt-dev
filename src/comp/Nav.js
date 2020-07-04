import React, { useState } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getNumbers } from '../actions/getAction'

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

function NavBar(props){
  const [ navOpen, setNavOpen ] = useState(false)
  return(
    <nav className="navRouter">
      <div className="nav-container">
        <div className="nav-logo">
          Cole's
        </div><ul className={ navOpen ? 'active' : '' }>
          {
            props.navLinks.map(link => (
              <li>
                <Link to={link.path} onClick={() => setNavOpen(false)}>
                  {link.text}
                  <i className={link.icon}></i>
                </Link>
              </li>
            ))
          }
          <li>
            <Link to="/cart" onClick={() => setNavOpen(false)}>
              Cart <span>{props.cartProps.cartNumbers}</span>
              <i className=""></i>
            </Link>
          </li>
        </ul>
        <figure
          onClick={ () => setNavOpen(!navOpen) }
          className={ navOpen ? 'nav-btn active' : 'nav-btn' }
        >
          <span className="nav-icon"></span>
        </figure>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers })(NavBar);
