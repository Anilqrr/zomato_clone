import React from "react";
import Logo from "../images/footer.avif";
import Svg from "../images/ch.svg";
import Lang from "../images/lang.svg";
import Flag from "../images/in.png";
import Linkedln from '../images/linkedln.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Twitter from '../images/twitter.svg'
import Youtube from '../images/youtube.svg'
import Playstore from '../images/playStore.webp'
import Applestore from '../images/apple.webp'
export default function Footer() {
  return (
    <footer>
      <div className="box">
        <section>
          <img src={Logo} alt="" />
          <div className="section">
            <div className="country">
              <img src={Flag} alt="India Flag" className="img" />
              India <img src={Svg} alt="" />
            </div>
            <div className="lang">
              <img src={Lang} className="img" alt="Lang" />
              English
              <img src={Svg} alt="test svg" />
            </div>
          </div>
        </section>
        <div className="other_links">
          <div className="o-box">
               <h6>ABOUT ZOMATO</h6>
               <div className="o-info">
                <p>Who We Are</p>
                <p>Blog</p>
                <p>Work With Us</p>
                <p>Investor Relations</p>
                <p>Report Fraud</p>
                <p>Press Kit</p>
                <p>Contact Us</p>
               </div>
          </div>
          <div className="o-box">
               <h6>ZOMAVERSE</h6>
               <div className="o-info">
                <p>Zomato</p>
                <p>Blinkit</p>
                <p>Feeding India</p>
                <p>Hyperpure</p>
                <p>Zomaland</p>
               </div>
          </div>
          <div className="o-box o-box1">
               <h6>FOR RESTAURANTS</h6>
               <div className="o-info">
                <p>Partner With Us</p>
                <p>Apps For You</p>
                <div className="o-info1">
                <h6>FOR ENTERPRISES</h6>
                <p>Zomato For Enterprise</p>
                </div>
               </div>
          </div>
          <div className="o-box">
               <h6>LEARN MORE</h6>
               <div className="o-info">
                <p>Privacy</p>
                <p>Security</p>
                <p>Terms</p>
                <p>Sitemap</p>
               </div>
          </div>
          <div className="o-box o-box-lineout">
               <h6>SOCIAL LINKS</h6>
               <div className="o-info s-logo">
                <img src={Linkedln} alt="" />
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
                <img src={Youtube} alt="" />
                <img src={Facebook} alt="" />
               </div>
               <div className="store-imgs">
                  <img src={Applestore} alt="" />
                  <img src={Playstore} alt="" />
               </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="content">
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
