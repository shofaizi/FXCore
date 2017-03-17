import React from 'react';
import axios from 'axios';
import '../../css/fx.css';
import Graph from './fxgraph';
import {basil} from '../../utils/persistence';

let latestUrl = 'http://api.fixer.io/latest';
let token = basil.get('token');

export default class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      rates: {},
      currencies: [],
      firstBase: '',
      secondBase: '',
      results: [],
      displayContainer: false
    }
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onFirstBaseChange = this.onFirstBaseChange.bind(this);
    this.onSecondBaseChange = this.onSecondBaseChange.bind(this);
    this.calculateCurrency = this.calculateCurrency.bind(this);
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

  onInputValueChange (e) {
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
        this.setState({results: response.data.rates, displayContainer: true})
      });

    axios.get('http://localhost:8080/fx/graph',{
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      params: {
        firstBase: this.state.firstBase,
        secondBase: this.state.secondBase,
        date: '2017-03-16'
      }
    })
      .then(function (response) {
        let dbResponse = response.data.value;
        console.log(dbResponse);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  calculateCurrency () {
    for(var key in this.state.results) {
      if(this.state.results.hasOwnProperty(key)) {
        if (key === this.state.firstBase){
          return (parseFloat(this.state.value) / parseFloat(this.state.results[key])).toPrecision(10);
        }
      }
    }
  }

  render () {
    return (
      <div className='converter-content'>
        <form className='fx-form' onSubmit={this.onSubmitHandler}>
          <div className='listMenu'>
          <ul className='fx-list'>
            <li>
              <input className='input' type='text' placeholder='Enter value' onChange={this.onInputValueChange}></input>
            </li>
            <li>
              <select className='input' onChange={this.onFirstBaseChange}>
                {this.state.currencies.map((object, i) => {
                    return <option key={i}>{object}</option>;
                })}
              </select>
            </li>
            <li>
              <i className="fa fa-arrows-h fa-2x" aria-hidden="true"></i>
            </li>
            <li>
              <select className='input' onChange={this.onSecondBaseChange}>
                {this.state.currencies.map((object, i) => {
                    return <option key={i}>{object}</option>;
                })}
              </select>
            </li>
            <li>
              <input type='submit' value="->"></input>
            </li>
          </ul>
        </div>
        </form>

        <div className='results'>
          <div className='result-header'>
            <h2>FX Currency Converter: {this.state.firstBase} <span>to</span>{this.state.secondBase}</h2>
          </div>
          <div className='result-container'>
            <div className='result-main'>
              <div className='result-convert'>
                <h3>{this.state.value}{this.state.firstBase} = {this.calculateCurrency()}
                   {this.state.secondBase}
                </h3>
              </div>
              {/* <div className='left-summary-col'>
                <h5 id='header5'>1 {this.state.firstBase} = {this.state.secondBase}</h5>
              </div>
              <div className='right-summary-col'>
              <h3>{this.state.value}{this.state.secondBase} = {this.state.firstBase}</h3>
            </div> */}
            </div>
          </div>
        </div>
        <Graph
          firstBase={this.state.firstBase}
          secondBase={this.state.secondBase}
        />
      </div>
    )
  }
}
