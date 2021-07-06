import '../styles/ContactFooter.css';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiMailOpenLine } from 'react-icons/ri'

const ContactFooter = () => {
	return (
		<div class='footer'>
      <p class='footer-title'>
        CONTACT
      </p>
			<p class="footer-text">
				Have any comments or questions? We'd love to hear from you!
        <table class="icon-list" cellPadding="10">
          <tr>
            <th class="less-padding"><RiMailOpenLine/></th>
            <th>unfoldcranes@gmail.com</th> 
            <th>|</th>
            <th><FaInstagram/></th>
            <th><FaFacebookF/></th>
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
