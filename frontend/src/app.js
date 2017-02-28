import React, { Component } from 'react';
import './css/App.css';
import Header from './Components/header';
import Footer from './Components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
