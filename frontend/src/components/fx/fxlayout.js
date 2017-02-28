import React from 'react';
import Graph from './fxgraph';
import Result from './fxresult';
import Selector from './fxselector';

export default class FxLayout extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <Selector />
        <Result />
        <Graph />
      </div>
    )
  }
}
