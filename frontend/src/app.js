import React, { Component } from 'react';
import './css/App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main className='col-xs-12-sm-10-md-6-lg-4-xl-2' id='main-content'>
            {this.props.children}
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
