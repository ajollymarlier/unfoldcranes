import '../styles/ContactFooter.css';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'

const ContactFooter = () => {
	return (
		<div class='footer'>
      <img id="footer-left" src="../circle_bottom_left.png"/>
      <img id="footer-right" src="../circle_top_right.png"/>
      <p class='footer-title'>
        CONTACT US
      </p>
			<p class="footer-text">
				Have any comments or questions? We'd love to hear from you!
        <table class="icon-list" cellPadding="7">
          <tr>
            <a href="mailto:unfoldcranes@gmail.com"><th class="less-padding"><FiMail/></th> </a>
            <a href="https://www.instagram.com/unfoldcranes/"><th><FaInstagram/></th></a>
            <a href="https://www.facebook.com/unfoldcranes"><th><FaFacebookF/></th></a>
          </tr>
        </table>
			</p>
		</div>
	);
};

export default ContactFooter;
