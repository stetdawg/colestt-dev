import React, { Component } from 'react'
import Specials from './Specials';
import Header from './Header'

function Home(props) {
 return (
        <div id="home">       
         <div  className="contentPanel">
         <Header>
       Welcome to Cole's Table Tennis!<br />
            Here you'll find a selection of products for sale at great prices, as well as reviews. There are also videos on gluing and cutting rubber, and applying topsheet onto sponge.<br/>
           <b>Check out our current specials below:</b>
       </Header>
                <Specials />
         </div>
        </div>
        )

}

export default Home;
