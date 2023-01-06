const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';
const storage = localStorage;

player.on(
  'timeupdate',
  throttle(event => {
    storage.setItem('video-current-time', event.seconds);
  }, 1000)
);

player
  .setCurrentTime(storage.getItem('video-current-time'))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('Wrong time!');
        break;

      default:
        console.log('Error!');
        break;
    }
  });
