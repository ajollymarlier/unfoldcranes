import '../styles/ContactFooter.css';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'

const ContactFooter = () => {
	return (
		<div class='footer'>
			{/* <h2>CONTACT</h2> */}
			<p class="footer-text">
				Have any comments or questions? We'd love to hear from you!
        <table class="icon-list" cellSpacing="10">
          <tr> 
            <th><HiOutlineMail/></th>
            <th>unfoldcranes@gmail.com</th>
            <th>|</th>
            <th><FaInstagram/></th>
            <th><FaFacebookF/></th>
          </tr>
        </table>
        &copy; 2021 The Unfold Cranes Team
			</p>
		</div>
	);
};

export default ContactFooter;
