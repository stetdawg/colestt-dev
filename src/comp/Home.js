import React, { Component } from 'react'
import '../css/landing.css'
import Specials from './Specials';


function Home(props) {
 return (
        <div>
         <div className="landingPage">
                {props.children}
         </div>
         <div  className="contentPanel">
                <Specials />
         </div>

        </div>
        )

}

export default Home;
