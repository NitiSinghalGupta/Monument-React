import React, { Component } from 'react';
import Header from './Header';
import Archive from './Archive';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Contact from './Contact';

const index = () => {
    return (
        <div>
            <Header />
            <Archive />
            <AboutUs />
            <Gallery />
            <Contact />
        </div>
    )
}

export default index;