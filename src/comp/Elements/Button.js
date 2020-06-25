/*This button should be able to take in any prop.
Along with displaying the property in the button. listen for clicks and pass data*/


import React from 'react'
//import ReactDOM from 'react-dom'

import "../../scss/Elements/button.scss"

const Button = (props) =><button className={"btn " + props.classN}>
  {props.children}
</button>

export default Button
