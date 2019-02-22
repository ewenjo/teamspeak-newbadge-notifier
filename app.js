const axios = require('axios');

// Notification (Alternatives: Pushover, Discord Bot, Slack Bot, Telegram Bot etc)
const PushBullet = require('pushbullet');

// Pushbullet Api access token (https://www.pushbullet.com/#settings/account)
const pusher = new PushBullet('ACCESS_TOKEN');

// Url to check
const url = 'https://badges-content.teamspeak.com/list';

let i = 0;
let currentLength;

const check = async() => {
  try {
    let res = await axios(url);
    let length = Buffer.byteLength(res.data);

    if (i == 0) {
      currentLength = length;
    } else if ((currentLength !== length) && (length !== 0)) {
      // Notify method here. Using pushbullet in this instance.
      pusher.note('', 'New Badge', url);
      currentLength = length;
    }

    i++;
  } catch (error) {
    console.error(error);
  }
};

// Check for changes every 10th second
setInterval(() => check(), 10 * 1000);
