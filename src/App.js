import React, { Component } from 'react'
import './App.css'
import BarChart from './BarChart'
class App extends Component {
   render() {
   return (
      <div className='App'>
        <BarChart data={[
          {shirt: 'Banana Republic-Grant Slim Fit', chest: 36.25, waist: 31.5},
          {shirt: 'Eton Shirts-Super Slim Fit', chest:36.25, waist:32.25},
          {shirt: 'Dalvey-Slim Fit', chest:37, waist:33},
          {shirt: 'Thomas Pink-Super Slim Fit - Stretch', chest:38.5, waist:35.5},
          {shirt: 'Brooks Brothers-Milano Fit', chest:38.5, waist:33}
        ]} />
      </div>
   )
   }
}
export default App
