import React,{Component} from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

class Youtuber extends Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  render({video}) {
      const id=getYouTubeID(video);
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId={id} opts={opts} onReady={this._onReady} />;
  }
}
export default Youtuber;