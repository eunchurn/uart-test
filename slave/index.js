const SerialPort = require("serialport");
const port = new SerialPort("/dev/ttySAC3", {
  baudRate: Number(process.argv.slice(2))
});

port.on("data", console.log);

port.on("error", console.log)