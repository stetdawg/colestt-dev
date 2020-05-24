import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/structure.css';


import Shop from './comp/Shop';
import ShopLanding from './comp/ShopLanding';



function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Shop />
        </section>
      </main>
    </div>
  );
}

export default App;
