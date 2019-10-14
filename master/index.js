const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const port = new SerialPort("/dev/tty.usbserial-AL04V4NG", {
  baudRate: Number(process.argv.slice(2))
});

const parser = new Readline();
port.pipe(parser);

parser.on("data", console.log);
setInterval(() => {
  port.write("!data:");
}, 1000);
