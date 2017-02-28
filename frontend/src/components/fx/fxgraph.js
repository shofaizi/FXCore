import React from 'react';

export default class Graph extends React.Component{
  
  render() {
    return (
      <div className='graph-container'>
        <canvas className='canvas'></canvas>
      </div>
    )
  }
}
