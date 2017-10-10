import React from 'react'
import ReactDOM from 'react-dom'

class YouTubeDebugger extends React.Component {
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

  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }



  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateClick}>Click me!</button>
        <button className="resolution" onClick={this.resolutionClick}>Click me!</button>
      </div>
    )
  }

}

export default YouTubeDebugger
