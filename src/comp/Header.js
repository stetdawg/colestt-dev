import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) =><div className="header">
                         <div id="header-container" >
                              {props.children}
                         </div>
                         </div>

export default Header;