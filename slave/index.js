const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const port = new SerialPort("/dev/ttySAC3", {
  baudRate: Number(process.argv.slice(2))
});

const parser = new Readline();
port.pipe(parser);

parser.on("data", console.log);
