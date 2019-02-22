# teamspeak-newbadge-notifier
Sends out some sort of notification when website content changes.


## Install
```bash
$ git clone git@github.com:ewenjo/teamspeak-newbadge-notifier.git
$ cd teamspeak-newbadge-notifier
$ npm install
```
#### Configure App

Teamspeak-Newbadge-notifier used the npm package `Pushbullet` by default for sending out notifications, but this is optional and change be changed to anything else.
The plenty of alternatives for sending of notifications, some of them are: Pushover, Discord Bot, Slack Bot, Telegram Bot etc.

If you want to use pushbullet all you have to do is create an account at https://www.pushbullet.com/ and get an access token https://www.pushbullet.com/#settings/account.

Make sure to change the ACCESS_TOKEN in app.js before you run it.

```javascript
const pusher = new PushBullet('ACCESS_TOKEN');
```

## Start
```bash
$ npm install pm2 -g
$ pm2 start app.js
```
or 

```bash
$ npm install forever -g
$ forever start app.js
```
