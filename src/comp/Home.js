import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../css/landing.css'




function Home(props) {
        return (
            <div>
                 <div className="landingPage">
                    {props.children}
            </div>
        </div>
        )

}

export default Home;
