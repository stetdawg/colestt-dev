import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../css/itempanel.css'




class ItemPanel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             //shape of 
        }
    }

    
    render() {
        return(
            <div  className="contentPanel">
            <div id="PanelWindow" className="Blade">{props.children}</div>
            <div id="PanelWindow" className="BlckRubber">{props.children}</div>
            <div id="PanelWindow" className="RdRubber">{props.children}</div>
            <div id="PanelWindow" className="Case">{props.children}</div>
            <div id="PanelWindow" className="Handle">{props.children}</div>
         
        </div>
        )
    }
}
 

export default ItemPanel;
