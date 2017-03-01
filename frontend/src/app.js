import React, { Component } from 'react';
import './css/App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
// import FxLayout from './components/fx/fxlayout';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main className='main-content'>
            {this.props.children}
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
