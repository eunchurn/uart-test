const SerialPort = require("serialport");
const Delimiter = require("@serialport/parser-delimiter");
const port = new SerialPort(process.argv[2], {
  baudRate: Number(process.argv[3])
});

const delimiter = Buffer.from("7D40", "hex");
const parser = port.pipe(new Delimiter({ delimiter }));

parser.on("data", console.log);

parser.on("error", console.log);
