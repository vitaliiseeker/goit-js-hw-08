import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTimePlaybackVideo;
try {
  currentTimePlaybackVideo = JSON.parse(localStorage.getItem("videoplayer-current-time") || 0);
} catch {
  currentTimePlaybackVideo = 0;
}

player.setCurrentTime(currentTimePlaybackVideo);

player.on('timeupdate', throttle(({ seconds }) => {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(
    seconds));
}, 1000));