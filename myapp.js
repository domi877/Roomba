import { CREDENTIALS } from './secrets.js';
import { roomba } from './local.js';

var myRobot = roomba(CREDENTIALS.bid, CREDENTIALS.password, CREDENTIALS.ip);

myRobot.on('connect', init);

function init () {
  myRobot.getMission()
  .then((actualState) => {
    console.log(actualState)
    myRobot.end()
  })
  .catch(console.log);
}