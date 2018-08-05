import React, { Component } from 'react'
import './App.css'

class ToolTip extends Component {
   constructor(props){
      super(props)
   }

  render() {
      return <div id="tooltip" style={{top: this.props.xPosition + 'px', left: this.props.yPosition + 'px'}}>
        <p>Chest: {this.props.chest} inches</p>
        <p>Waist: {this.props.waist} inches</p>
      </div>
   }
}
export default ToolTip
