import React, { Component } from 'react';
import Header from './Header';
import Article from './MidSection/Article';
import Contact from './Contact';

const blog = () => {
  return (
	<div>
      <Header />
      <Article />
      <Contact />
    </div>
  )
}

export default blog;