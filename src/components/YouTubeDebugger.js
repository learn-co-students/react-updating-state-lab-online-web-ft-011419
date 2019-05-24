// Code YouTubeDebugger Component Here
import React, { Component } from 'react';
export default class DigitalClicker extends Component { 
  constructor() {
    super();
this.state = {
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
}
  }

  bitrateClick = () =>{
this.setState({
  settings: {
  ...this.state.settings,
  bitrate: 12
  }
})
    console.log(this.state)

  }
  resolutionClick = () => {
    this.setState({
      settings: {
      ...this.state.settings,
        video: {
          ...this.state.settings.video,
      resolution: '720p'
    }}
 
   }
  )
   console.log(this.state)
  }



//<button class='resolution' onClick={this.resolutionClick}></button>

  render() {

return (
  <div>
  <button className='bitrate' onClick={this.bitrateClick}>Change bitrate</button> 



  
    <button className='resolution' onClick={this.resolutionClick}> Change resolution</button>
  </div>

)



}












}