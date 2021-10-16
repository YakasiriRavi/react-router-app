import React from 'react';
import './Footerstyles.css';



const Footer = () => {
    return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h6>Address</h6>
            <h9 className="list-unstyled">
              <p className="add">Ace Engineering Head Office
              4-1-1236, King Koti
              Hyderabad, Telangana</p>
            </h9>
          </div>
          {/* Column2 */}
          <div className="col">
            <h7>Know More About</h7> <br/>
            <ui className="list-unstyled">
              <a href="https://gate.iitkgp.ac.in/">GATE</a> <br/>
              <a href="https://www.upsc.gov.in/">IES</a> <br/>
              <a href="https://psc.ap.gov.in/(S(gsoams4qrghb5fyl0qs4ixi4))/Default.aspx">APPSC-AEE/AE</a>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h7>Follow Us on</h7> <br/>
            <ui className="list-unstyled">
            <li className="btn btn-outline-primary" >
              <a href="https://twitter.com/?lang=en"><img src="/images/twitlogo.png" alt="twitter" height="25px"/></a> <br/> </li> &nbsp;
              <li className="btn btn-outline-primary" >
              <a href="https://www.facebook.com/"><img src="/images/facebook.png" alt="twitter" height="25px"/></a> <br/> </li>&nbsp;&nbsp;
              <li className="btn btn-outline-primary">
              <a href="https://www.youtube.com/"><img src="/images/yt.png" alt="twitter" height="25px"/></a> <br/> </li>
             
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
            <h12>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ACE ACADEMY |&nbsp;<img src="/images/foot.png" alt="footerlogo" height="29px"/> All rights reserved |
            Terms Of Service | Privacy
            
          </p>
          </h12>
        </div>
      </div>
    </div>
    )
}

export default Footer;
