import '../styles/ContactFooter.css';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiMailOpenLine } from 'react-icons/ri'

const ContactFooter = () => {
	return (
		<div class='footer'>
      <p class='footer-title'>
        CONTACT US
      </p>
			<p class="footer-text">
				Have any comments or questions? We'd love to hear from you!
        <table class="icon-list" cellPadding="7">
          <tr>
            <a href="mailto:unfoldcranes@gmail.com"><th class="less-padding"><RiMailOpenLine/></th> </a>
            <a href="https://www.instagram.com/unfoldcranes/"><th><FaInstagram/></th></a>
            <a href="https://www.facebook.com/unfoldcranes"><th><FaFacebookF/></th></a>
            <th>|</th>
            <th>unfoldcranes</th> 
          </tr>
          {/* // vertical list - kinda ugly
          <tr> 
            <th><RiMailOpenLine/></th>
            <th>unfoldcranes@gmail.com</th> 
          </tr>
          <tr>
            <th><FaInstagram/></th>
            <th>unfoldcranes</th>
          </tr>
          <tr>
            <th><FaFacebookF/></th>
            <th>unfoldcranes</th>
          </tr> */}
        </table>
			</p>
		</div>
	);
};

export default ContactFooter;
