import linkedin from "../assets/images/social/linkedin.png";
import twitter from "../assets/images/social/twitter.png";
import facebook from "../assets/images/social/facebook.png";
import instagram from "../assets/images/social/instagram.png";
import youtube from "../assets/images/social/youtube.png";

import character from "../assets/images/others/character.svg";

import bkash from "../assets/images/payment/BKash-bKash-Logo.wine.png";
import nagad from "../assets/images//payment/nagad-logo-7A70CCFEE0-seeklogo.com.png";
import visa from "../assets/images/payment/g4158.png";
import mastercard from "../assets/images/payment/Mastercard-logo.png";
import amex from "../assets/images/payment/amex-logo-png.png";

import customer from "../assets/images/others/customer-service.png";
import mail from "../assets/images/others/mail-send-line.png";
import phone from "../assets/images/others/phone-line.png";


const Footer = () => {
  return (
    <div className="footer">

     <div className="footer-social">
        <img src={facebook} alt="linkedIn" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={instagram} alt="instagram" />
        <img src={youtube} alt="youtube" />
      </div>
   

      <div className="footer-others">

        <div className="others-character">
          <img src={character} alt="linkedIn" />
        </div>

        <div className="subscribe-nav-payment">

          <div className="email-footer">
          <p className="email-heading">subscribe</p>
          <p className="email-headline">Get the latest news from zDrop</p>
          <form className="email-form">
            <input type="email" className="email" placeholder="Email address" />
          </form>
          </div>

          <div className="nav-footer">
            <nav className="nav">
              <ul>
                <li>
                  <a href="#">About zDrop</a>
                </li>
                <li>
                  <a href="#">FAQ & Support</a>
                </li>
                <li>
                  <a href="#">Terms and Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="payment-footer">
            <img src={bkash} alt="bkash" />
            <img src={nagad} alt="nagad" />
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={amex} alt="amex" />
          </div>

        </div>

        <div className="footer-contact">
            <p>contact us</p>
            <div className="footer-contact-inner">
                <img src={customer} alt="" />
                <div>
                    <p className="service-name">Hotline</p>
                    <p className="address">+8801929459195 (10am-10pm/Sat-Thur)</p>
                </div>
            </div>
            <div className="footer-contact-inner">
                <img src={phone} alt="" />
                <div>
                    <p className="service-name">Whole Sales :</p>
                    <p className="address">+8801929459195 (10am-10pm/Sat-Thur)</p>
                </div>
            </div>
            <div className="footer-contact-inner">
                <img src={mail} alt="" />
                <div>
                    <p className="service-name">Email :</p>
                    <p className="address">+8801929459195 (10am-10pm/Sat-Thur)</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
