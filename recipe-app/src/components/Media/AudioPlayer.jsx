import PropTypes from 'prop-types';

const AudioPlayer = ({ audioUrl, title }) => {
  return (
    <div style={{ backgroundColor: '#f9faf8', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #1f3d2b', marginBottom: '40px' }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#1f3d2b' }}>🎧 {title}</h4>
      <audio controls style={{ width: '100%' }}>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

AudioPlayer.propTypes = {
  audioUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AudioPlayer;