import _ from 'lodash';

export function formatDuration(duration) {
  var sec_num = parseInt(duration, 10);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = '0'+hours;}
  if (minutes < 10) {minutes = '0'+minutes;}
  if (seconds < 10) {seconds = '0'+seconds;}

  if (hours === '00') {
    return minutes+':'+seconds;
  } else {
    return hours+':'+minutes+':'+seconds;
  }
}

export function getSelectedStream(streams, defaultMusicSource) {
  let selectedStream = _.find(streams, {source: defaultMusicSource});

  return selectedStream === undefined
  ? streams ? streams[0] : null
  : selectedStream;
}
