import React, {Component} from 'react';

class YouTubeDebugger extends Component {

    constructor() {
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

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    updateResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.updateBitrate}>Change bitrate to 12</button>
                <button className="resolution" onClick={this.updateResolution}>Change resolution to 720p</button>
                <p>{this.state.settings.bitrate}</p>
                <p>{this.state.settings.video.resolution}</p>
            </div>
        )
    }

}

export default YouTubeDebugger