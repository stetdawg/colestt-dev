import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/structure.css';

import Shop from './comp/Shop';

function App() {
  return (
    <div className="App">
      <main>
        <section id="hero">
          <div className="container">
            <div className="content">
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
            </div>
          </div>
        </section>
        <section>
          <Shop />
        </section>
      </main>
    </div>
  );
}

export default App;
