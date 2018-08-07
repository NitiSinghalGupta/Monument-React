import React, { Component } from 'react';
import {SocialIcons} './SocialIcons';

const footer = () => {
  return (
	<footer>
		<div class="wrap">
			<div class="social-links">
				<SocialIcons class="facebook" url='http://www.facebook.com' />
				<a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
				<a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
			</div>
			<input type="text" placeholder="Email Address" />
			<button type="submit">Keep in Touch</button>
		</div>

		<p class="copyright">&copy;2016 Sarah Holden</p>
	</footer>
  )
}

export default footer;