import React from 'react';

export default class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
        <div className='result-container'>
          <h2>FX Currency Converter:{this.props.currency} to {this.props.base}</h2>
          <h3>{this.props.value} =</h3>
          <h1>{this.props.convertedValue}</h1>
          <span>{this.props.currency}</span>
          <div className='left-summary-col'>
            <h3>{this.props.value}{this.props.currency} = {this.props.base}</h3>
          </div>
          <div className='right-summary-col'>
            <h3>{this.props.value}{this.props.base} = {this.props.currency}</h3>
          </div>
        </div>
    )
  }
}
