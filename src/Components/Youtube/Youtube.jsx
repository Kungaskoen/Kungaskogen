import React, { Component } from 'react';
import './Youtube.css'
import YouTube from 'react-youtube';

// https://www.youtube.com/watch?v=_nBlN9yp9R8
// https://youtu.be/_nBlN9yp9R8
export default class Youtube extends Component {


  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="youtube-clip">
        <h3> Kungaskogen </h3>

          <YouTube
            videoId="09ERI0nDwY0"
            opts={opts}
            onReady={this._onReady}
          />

          <YouTube
            videoId="zOtA5paf7cE"
            opts={opts}
            onReady={this._onReady}
          />

          <YouTube
            videoId="Tbm9DHQ-izI"
            opts={opts}
            onReady={this._onReady}
          />

          <YouTube
            videoId="AChEHJdyYE0"
            opts={opts}
            onReady={this._onReady}
          />

          <YouTube
            videoId="5HDUwImaUkU"
            opts={opts}
            onReady={this._onReady}
          />

          <YouTube
            videoId="LfrfYrt8C2c"
            opts={opts}
            onReady={this._onReady}
          />

          <YouTube
            videoId="0o5Rup3jaoA"
            opts={opts}
            onReady={this._onReady}
          />

          <YouTube
            videoId="CqnpETBQ4kY"
            opts={opts}
            onReady={this._onReady}
          />


        <YouTube
          videoId="aio0JuN97Ic"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}
