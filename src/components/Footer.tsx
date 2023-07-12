import React from 'react';
import logo from '../assets/antiguru.svg';
import AboutPage from '../pages/About';
import GetInvolved from '../pages/GetInvolved';
import PopupWindow from './PopupWindow';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav">
        <ul>
          <li>
            <PopupWindow triggerElement={<a href="#">About</a>} content={<AboutPage />} />
          </li>
          <li>
            <PopupWindow triggerElement={<a href="#">Get Involved</a>} content={<GetInvolved />} />
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} className="logo" alt="AntiGuru" title="AntiGuru" />
      </div>
    </footer>
  );
};

export default Footer;
