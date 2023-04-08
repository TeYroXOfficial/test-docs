import YouTubeProps from 'react-youtube';

const YouTubeComponent = ({ videoId }) => {
    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeComponent;