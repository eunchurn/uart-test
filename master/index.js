const SerialPort = require("serialport");
const port = new SerialPort(process.argv[2], {
  baudRate: Number(process.argv[3])
});

const array = new Array(10000).map((val, index) => index);
const sampleData = Buffer.from(array);

setInterval(() => {
  port.write(sampleData);
}, 1000);
