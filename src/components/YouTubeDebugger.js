// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super()
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

    handleClickOne= () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }

    handleClickTwo= () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p',

          }
        }
      })
    }

  render() {
    return (
      <div className="youTubeDebugger">
        <button className="bitrate" onClick={this.handleClickOne}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleClickTwo}>{this.state.settings.video.resolution}</button>

      </div>
    )
  }
}
