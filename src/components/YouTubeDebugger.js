import React from 'react';


class YouTubeDebugger extends React.Component {
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
    };
  }

  handleYouTubeBitrate = () => {
      this.setState({

          settings: {
              ...this.state.settings,
              bitrate: 12

          }
      });
  };

  handleYouTubeVideo = () => {
      this.setState({

          settings: {
              ...this.state.settings,

              video: {
                  ...this.state.settings.video,
                  resolution: '720p'
              }
          }
      });
  };

  render() {
      return(
       <div> 
        <button className="bitrate" onClick={this.handleYouTubeBitrate}> 
            Change Bitrate 
        </button>   
        <button className="resolution" onClick={this.handleYouTubeVideo}>
            Change Resolution
        </button>  
       </div>   
      );
  }

}

export default YouTubeDebugger;