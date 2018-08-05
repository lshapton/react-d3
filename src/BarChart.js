import React, { Component } from 'react'
import './BarChart.css'
import ToolTip from './ToolTip'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import XAxis from './XAxis'
import YAxis from './YAxis'

class BarChart extends Component {
  constructor(props){
    super(props)
    var data = props.data
    var chestData = data.map(x => x.chest)
    this.width = 1000
    this.height = 1000

    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)
    this.state = {
      sizesScale: scaleLinear().domain([31.0, max(chestData)+1]).range([100, this.width - 100]),
      xPosition: 100,
      yPosition: 100,
      waist: 0,
      chest: 0
    };
  }

  showTooltip = (e) => {
   let tooltip = document.getElementById("tooltip");
   tooltip.style.display = "block";
   this.setState({
     xPosition: (parseInt(e.target.getAttribute("y"))),
     yPosition: (parseInt(e.target.getAttribute("x")) + parseInt(e.target.getAttribute("width"))),
     waist: parseInt(e.target.getAttribute("waist")),
     chest: parseInt(e.target.getAttribute("chest"))
   });
  }

  hideTooltip(){
   let tooltip = document.getElementById("tooltip");
   tooltip.style.display = "block";
  }


  render() {
   const data = this.props.data,
    { sizesScale } = this.state;

  return <div>
    <svg ref={node => this.node = node} width={this.width + 150} height={this.height}>
      {
        data.map((d,i) => (
          <rect
            key={i}
            x={sizesScale(d.waist) + 150}
            y={i * 50}
            width={sizesScale(d.chest) - sizesScale(d.waist)}
            height="40"
            waist={d.waist}
            chest={d.chest}
            onMouseEnter={this.showTooltip}
            onMouseLeave={this.hideTooltip}
          />

        ))
      }
      <YAxis data={data}/>
      <XAxis data={data} width={this.width}/>
    </svg>]
    <ToolTip chest={this.state.chest} waist={this.state.waist} xPosition={this.state.xPosition} yPosition={this.state.yPosition} />
  </div>
  }
}
export default BarChart
