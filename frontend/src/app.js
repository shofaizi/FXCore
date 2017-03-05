import React, { Component } from 'react';
import './css/App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Welcome from './components/home/welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main className='main-content'>
            {/* <Welcome /> */}
            {this.props.children}
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
