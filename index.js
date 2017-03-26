#! /usr/bin/env node
const notifier = require('node-notifier');
const path = require('path');


// 1 Hour = 3,600,000 Milliseconds
// 20 mins = 1,200,000 Milliseconds
const startTime = Date.now();
const logo = path.join(__dirname, 'images', 'FACicon.png');

notifier.notify({
  title: 'Timer started!',
  message: 'Get researching in your pair',
  icon: logo,
  sound: true,
  closeLabel: 'Close',
});

const timer = setInterval(checkTime, 5000); // eslint-disable-line no-use-before-define

let timer1 = false;
let timer2 = false;

function checkTime() {
  const newTime = Date.now();

  if (newTime >= startTime + 3600000 /* 180000*/) {
    notifier.notify({
      title: '20/20/20 over',
      message: 'The full hour has passed, I hope you solved your problem!',
      icon: logo,
      sound: true,
      closeLabel: 'Close',
    });
    clearInterval(timer);
  } else if (newTime >= startTime + 2400000 /* 120000*/ && !timer2) {
    notifier.notify({
      title: 'Go ask a mentor!',
      message: 'Another 20 minutes has passed, time to ask a mentor.',
      icon: logo,
      sound: true,
      closeLabel: 'Close',
    });
    timer2 = true;
  } else if (newTime >= startTime + 1200000 /* 60000*/ && !timer1) {
    notifier.notify({
      title: '20 minutes is up!',
      message: 'Ask someone in your cohort for help.',
      icon: logo,
      sound: true,
      closeLabel: 'Close',
    });
    timer1 = true;
  }
}
