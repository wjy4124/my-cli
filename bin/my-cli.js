let ora = require('ora');

let spaner = ora("loading for 3s");

spaner.start();

setTimeout(e=> {
  spaner.stop();
}, 3000);
