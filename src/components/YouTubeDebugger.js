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
    }
  }

  bitrateClicked = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    })
  }

  resolutionClicked = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        },
      },
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.bitrateClicked} className="bitrate">Bit</button>
        <button onClick={this.resolutionClicked} className="resolution">Res</button>
      </div>

    )
  }
}

export default YouTubeDebugger;
