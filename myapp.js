import { CREDENTIALS } from './secrets.js';
import { roomba } from './local.js';

var myRobot = roomba(CREDENTIALS.bid, CREDENTIALS.password, CREDENTIALS.ip);

myRobot.on('connect', init);

function init () {
  myRobot.getWeek()
  .then((weekConfig) => {
    console.log(weekConfig)
    myRobot.end()
  })
  .catch(console.log);
}