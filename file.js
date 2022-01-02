fs = require("fs");

// const read = fs.readFile("./msg.txt", "utf-8", (err, data) => {
//   console.log(data);
//   return data;
// });

// const data = "I like to do it do it";

// fs.writeFile("./msg.txt", data, (err) => console.log("completed"));

const quote = "With great power comes great responsibilities";
const num = process.argv[2];

for (i = 1; i <= num; i++) {
  fs.writeFile(`./backups/test${i}.html`, quote, (err) =>
    console.log("created test", i)
  );
}

// for (i = 1; i <= num; i++) {
//   // fs.writeFileSync(`./backups/test${i}.html`, quote);
//   // console.log("created test", i);
//   fs.writeFile(`./backups/test${i}.html`, quote, (err) => {
//     console.log("created test", i);
//   });
// }
// fs.copyFile("./cool.txt", "./cool.html", (err) => {
//   console.log("copy completed");
// });

// fs.unlink("./removeFile.css", (err) => {
//   console.log("deleted successfully");
// });
// fs.readdir("./backups", (err, files) => console.log(files));
