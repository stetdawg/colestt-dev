/*This button should be able to take in any prop.
Along with displaying the property in the button. listen for clicks and pass data*/


import React from 'react'
import ReactDOM from 'react-dom'

import "../../scss/Elements/select.scss"

const Select = (props) => <select name={props.itemType}>
  {props.children}
</select>

export default Select
