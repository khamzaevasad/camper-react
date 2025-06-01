import React from 'react'
import miniLogo from '../assets/Camper.svg';
import youtube from '../assets/youtube.svg';
import insta from '../assets/insta.svg';
import naver from '../assets/naver.svg';
import { FooterMobile, FooterSection } from '../style/footerStyle';
const Footer = () => {
  return (
    <FooterSection>
        <FooterMobile className="footer-con">
            <div class="logo-mini-con">
                <img src={miniLogo} alt="logo" width="92.128"/>
            </div>
            <div class="sns-mini-con">
                <img src={youtube}alt="youtube" width="30.042"/>
                <img src={insta} alt="youtube" width="24.033"/>
                <img src={naver} alt="youtube" width="23.032"/>
            </div>
        </FooterMobile>
    <div className="footer-section">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={miniLogo} alt="logo" />
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-contact">
          <table>
            <thead>
              <tr>
                <th>Services</th>
                <th>Menu</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Camping</td>
                <td>About</td>
                <td>
                  <img src={youtube} alt="youtube" />
                  <img src={insta} alt="insta" />
                  <img src={naver} alt="naver" />
                </td>
              </tr>
              <tr>
                <td>Lodging</td>
                <td>Services</td>
                <td>021 Korea Seoul, LA</td>
              </tr>
              <tr>
                <td>Harbor</td>
                <td>Booking</td>
                <td>caper@example.com</td>
              </tr>
              <tr>
                <td>Day Use</td>
                <td>Blog</td>
                <td>(021)345-6789-99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </FooterSection>
  )
}

export default Footer
