const notifier = require('node-notifier');
const path = require('path');

const logo = path.join(__dirname, '..', 'images', 'FACicon.png');

notifier.notify({
  title: 'Timer started!',
  message: 'Get researching pal!',
  icon: logo,
  sound: true,
  closeLabel: 'Close',
});
