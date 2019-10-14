const SerialPort = require("serialport");
const port = new SerialPort(process.argv[2], {
  baudRate: Number(process.argv[3])
});

port.on("data", console.log);

port.on("error", console.log)