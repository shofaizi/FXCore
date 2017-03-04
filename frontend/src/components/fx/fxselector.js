import React from 'react';
import axios from 'axios';

let latestUrl = 'http://api.fixer.io/latest';

export default class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      rates: {},
      currencies: [],
      firstBase: '',
      secondBase: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onFirstBaseChange = this.onFirstBaseChange.bind(this);
    this.onSecondBaseChange = this.onSecondBaseChange.bind(this);
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
    this.setState({value: e.target.value});
    console.log(this.state.value)
  }

  onFirstBaseChange (e) {
    this.setState({firstBase: e.target.value}, function() {
      console.log(this.state.firstBase)
    });
  }

  onSecondBaseChange (e) {
    this.setState({secondBase: e.target.value}, function() {
      console.log(this.state.secondBase)
    });
  };

  onSubmitHandler (e) {
    e.preventDefault();
    axios.get(`http://api.fixer.io/latest?base=${this.state.secondBase}`)
      .then(response => {
        console.log(response.data.rates);
      })
  }

  // renderResults() {
  //   return (
  //     <Result
  //       onSubmitHandler={this.onSubmitHandler}
  //     />
  //   )
  // }

  render () {
    return (
      <div>
        <div className='result-container'>
          <h2>FX Currency Converter:{this.state.firstBase} to {this.state.secondBase}</h2>
          <h3>{this.state.value} =</h3>
          {/* <h1>{this.props.convertedValue}</h1> */}
          <span>{this.state.secondBase}</span>
          <div className='left-summary-col'>
            <h3>{this.state.value}{this.state.firstBase} = {this.state.secondBase}</h3>
          </div>
          <div className='right-summary-col'>
            <h3>{this.state.value}{this.state.secondBase} = {this.state.firstBase}</h3>
          </div>
        </div>
        <div className='fx-form'>
          <form onSubmit={this.onSubmitHandler}>
            <div className='selector'>
              <div>
                <input type='text' placeholder='Enter value' onChange={this.onValueChange}></input>
              </div>
              <div>
                <select onChange={this.onFirstBaseChange}>
                  {this.state.currencies.map((object, i) => {
                      return <option key={i}>{object}</option>;
                  })}
                </select>
              </div>
              <span>-></span>
              <div>
                <select onChange={this.onSecondBaseChange}>
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
        </div>
      </div>
    )
  }
}
