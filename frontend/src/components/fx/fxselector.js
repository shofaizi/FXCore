import React from 'react';
import axios from 'axios';

export default class Selector extends React.Component {
  
  render() {
    let latestUrl = 'http://api.fixer.io/latest';

    axios.get(`${latestUrl}`)
    .then(response => {
      var a = response.data.rates;
      console.log(a);
      return a;
    })
    .catch(function(err) {
      return err;
    });

    return (
      <div className='selector'>
        <span>
          <input type='text' placeholder='Enter value'></input>
        </span>
        <div>
          <select>
            <option>{this.props.something}</option>
          </select>
        </div>
      </div>
    )
  }
}
