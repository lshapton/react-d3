import React, { Component } from 'react'
import './App.css'
import * as d3Axis from 'd3-axis'
import { scaleOrdinal } from 'd3-scale'
import { select } from 'd3-selection'

class XAxis extends Component {
  constructor(props){
    super(props)
    this.renderAxis = this.renderAxis.bind(this)
  }
  componentDidMount() { this.renderAxis() }
  componentDidUpdate() { this.renderAxis() }

  renderAxis() {
    var data = this.props.data
    var shirtScale = scaleOrdinal().domain(data.map(x => x.shirt)).range(data.map((d,i) => i * 50));
    var yAxis = d3Axis['axisLeft']().scale(shirtScale)

    // y-axis
     select(this.refs.g)
       .call(yAxis);
  }

    render() {
    	return <g transform="translate(250, 25)" ref="g" />
    }
}

export default XAxis
