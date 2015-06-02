var Cylon = require('cylon');

Cylon.robot({
  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    compass: { driver: 'lsm9ds0xm' }
  },

  work: function(my) {
    every((1).second(), function() {
      my.compass.getAccel(function(err, data) {
        console.log(data);
      });
    });
  }
}).start();