import PropTypes from 'prop-types';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1f3d2b' }}>Cooking Tutorial</h3>
      
      {/* HTML5 video element with playback controls and fallback text */}
      <video controls style={{ width: '100%', borderRadius: '8px', backgroundColor: '#000' }}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoPlayer;