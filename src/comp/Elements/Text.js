/*This button should be able to take in any prop.
Along with displaying the property in the button. listen for clicks and pass data*/


import React from 'react'
//import ReactDOM from 'react-dom'

import "../../scss/Elements/text.scss"

const Text = (props) =><input name={props.itemType} type="text" className={"text " + props.classN} />

export default Text
