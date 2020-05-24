import React from 'react';

import '../css/shop.css'

class ShopLanding extends React.Component{


  render(){
    return(
      <div className="flex">
        <div className="panel" style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/333107318835249152/708619198582226964/gambler-oversize-kevlar.png)'}}>
          <p>Basics</p>
        </div>
        <div className="panel" style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/333107318835249152/708619315821412392/yinhe-venus3.png)'}}>
          <p>Customs</p>
        </div>
        <div className="panel" style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/333107318835249152/708619382112124998/index2.png)'}}>
          <p>Accessories</p>
        </div>
      </div>
    );
  }
}

export default ShopLanding;
