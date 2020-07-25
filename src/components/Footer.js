import React from 'react';

function Footer() {
    return (
        <div className ="row">
        <div className ="col-lg-12">
          <ul className ="card-footer">
            <li id="mail"><span className ="fa fa-envelope-square"></span><a
                href="mailto:maharjanbipin@gmail.com">maharjanbipin@gmail.com</a></li>
            <li id="phone"><span className ="fa fa-phone-square"></span>859-539-9100</li>
            <li>&copy; Copyright</li>
          </ul>
        </div>
      </div>
      )
    
}
export default Footer;