/*

Name:   About.js
Site:   Coles TT
Auth:   Anthony Isbell
Crtd:   5/27/2020
Mod:

*/

import React from 'react';
//import ReactDOM from 'react-dom';

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <h1>About Us</h1>
        <h2>Payment</h2>
        <p>I accept payment through the following:</p>
        <ul>
          <li>Credit card through PayPal (PayPal account not required or you can use your account)</li>
          <li>Personal checks (for approved customers only)</li>
        </ul>
        <h2>Shipping</h2>
        <h3>USA Shipping</h3>
        <ul>
          <li>I can send rubbers anywhere in the continental US via First Class for $2.</li>
          <li>Bulky items like bags of balls, blades, glue, and post sets require $7 priority shipping, which takes two or three days to anywhere in the continental US.</li>
          <li>Both domestic options will include "delivery confirmation."</li>
        </ul>
        <h3>International Shipping</h3>
        <ul>
          <li>I've shipped to every continent except Antarctica. I charge actual shipping for international orders. Even though the site will charge you a default $25, I will always refund to reflect the actual shipping cost.</li>
        </ul>
        <p>I reserve the right to refuse any order (with full refund of course) due to shipping infeasibility or for any other reason I deem appropriate. Please contact me for more accurate quotes, especially if you're outside the US. It's really best to email me before placing an international order to discuss the shipping options available. It has always been my policy to try to charge no more than the actual shipping cost and I frequently refund shipping overpayments. However, I am also no longer in a position to guarantee the postal systems of other countries, especially on expensive orders. Again, if you place an order, it will either be filled or you'll get an email with clarification. Always when ordering from anyone, please remember to check your Paypal/CC email occasionally after ordering for correspondance.</p>
        <p><b>Canadian customers need not worry.</b> Regular shipping to Canada is cheap and now trackable. Typically around $8 for two rubbers, $16 for a combo.</p>
      </div>
    );
  }

}

export default About;
