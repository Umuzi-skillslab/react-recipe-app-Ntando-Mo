import PropTypes from "prop-types";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className={styles.container}>
      <video className={styles.video} controls>
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