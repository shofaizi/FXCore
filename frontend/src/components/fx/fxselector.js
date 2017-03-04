import React from 'react';
import axios from 'axios';

let latestUrl = 'http://api.fixer.io/latest';
// let latestWithBase = 'http://api.fixer.io/latest' + `${base}`;

export default class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      rates: {},
      currencies: [],
      base: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onBaseChange = this.onBaseChange.bind(this);
  }

  makeRequest () {
    axios.get(`${latestUrl}`)
    .then(response => {
      this.setState({rates: response.data.rates, currencies: Object.keys(response.data.rates)});
    })
  }

  componentDidMount () {
    this.makeRequest();
  }

  onValueChange (e) {
    this.setState({value: e.target.value})
    console.log(this.state.value)
  }

  onBaseChange (e) {
    // console.log(e)
    this.setState({base: e.target.value})
    console.log("The state for base is:" + this.state.base)
  }

  onSubmitHandler (e) {
    e.preventDefault();
    console.log(this.state.base)
    // this.setState({base: this.state.base})
    // this.setState({base: e.target.value})
  }

  render () {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className='selector'>
          <div>
            <input type='text' placeholder='Enter value' onChange={this.onValueChange}></input>
          </div>
          <div>
            <select>
              {this.state.currencies.map((object, i) => {
                  return <option key={i}>{object}</option>;
              })}
            </select>
          </div>
          <span>-></span>
          <div>
            <select onChange={this.onBaseChange}>
              {this.state.currencies.map((object, i) => {
                  return <option key={i}>{object}</option>;
              })}
            </select>
          </div>
        </div>
        <div>
          <input type='submit' value="->"></input>
        </div>
      </form>
    )
  }
}
