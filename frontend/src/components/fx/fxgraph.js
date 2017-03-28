import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import '../../css/fxgraph.css';

export default class Graph extends React.Component {

	render () {
    console.log(this.props.dbResponse);
  	return (
    	<div className='graph-container'>
        <LineChart
          width={600}
          height={200}
          data={this.props.dbResponse}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="date"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line connectNulls={true} type='monotone' dataKey='value' stroke='#8884d8' fill='#8884d8' />
        </LineChart>
      </div>
    );
  }
}
