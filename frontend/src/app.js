import React, { Component } from 'react';
import './css/App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = { signedIn: false }
  }
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
