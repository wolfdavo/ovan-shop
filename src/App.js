import React, { Component } from 'react';
import Homepage from './homepage/home.js';
import Footer from './footer/footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
