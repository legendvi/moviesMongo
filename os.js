const os = require("os");

console.log("free memory", os.freemem());
console.log("Total memory", os.totalmem());
console.log("Processor", os.cpus());
console.log("version", os.version());
