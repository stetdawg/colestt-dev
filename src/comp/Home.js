import React, { Component } from 'react'
import Specials from './Specials';

function Home(props) {
 return (
        <div id="home">
         <div className="landingPage">
         <div id="landing-container" >
              {props.children}
         </div>
         </div>
         <div  className="contentPanel">
                <Specials />
         </div>
        </div>
        )

}

export default Home;
