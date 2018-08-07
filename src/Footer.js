import React, { Component } from 'react';
import {SocialIcons} from 'react-social-icons';

const footer = () => {
  return (
	<footer>
		<div className="wrap">
			<div className="social-links">
				<SocialIcons className="facebook" url="http://facebook.com" />
				<SocialIcons className="instagram" url='http://instagram.com' />
				<SocialIcons className="twitter" url='http://twitter.com' />
			</div>
			<input type="text" placeholder="Email Address" />
			<button type="submit">Keep in Touch</button>
		</div>

		<p className="copyright">&copy;2016 Sarah Holden</p>
	</footer>
  )
}

export default footer;