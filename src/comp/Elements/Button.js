/*This button should be able to take in any prop.
Along with displaying the property in the button. listen for clicks and pass data*/


import React from 'react'

import "../../scss/Elements/button.scss"

/*
Props

onClick:

  in order to use the onClick of the button, add the function to the onClick property

classN:

  assigns the className based on the classN property

*/

const Button = (props) => <button onClick={props.onClick} className={"btn " + props.classN}>
  {props.children}
</button>

export default Button
