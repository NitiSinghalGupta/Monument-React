import React, { Component } from 'react';
import {SocialIcon} from 'react-social-icons';
import './Footer.css';

const footerComponent = () => {
  return (
	<footer>
		<div className="wrap">
			<div className="social-links">
				<SocialIcon className="facebook" url="http://facebook.com" />
				<SocialIcon className="instagram" url='http://instagram.com' />
				<SocialIcon className="twitter" url='http://twitter.com' />
			</div>
			<input type="text" placeholder="Email Address" />
			<button type="submit">Keep in Touch</button>
		</div>

		<p className="copyright">&copy;2016 Sarah Holden</p>
	</footer>
  )
}

export default footerComponent;