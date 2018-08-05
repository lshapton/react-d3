import React, { Component } from 'react'
import './App.css'
import * as d3Axis from 'd3-axis'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
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
    var width = this.props.width
    var chestData = data.map(x => x.chest)
    var sizesScale = scaleLinear().domain([31.0, max(chestData)+1]).range([100, width - 100])
    var xAxis = d3Axis['axisBottom']().scale(sizesScale)

    // x-axis
     select(this.refs.g)
       .call(xAxis);
  }

    render() {
    	return <g transform="translate(150, 250)" ref="g" />
    }
}

export default XAxis
