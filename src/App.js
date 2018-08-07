import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Blog from './Blog/Blog';
import Index from './Index/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
{/* repeated components       */}
         <Navbar />
{/* components for Blog.html page          */}
         <Blog />
{/* components for Index.html page */}
         {/* <index /> */}
{/* repeated components   */}
         <Footer />
      </div>
    );
  }
}

export default App;
