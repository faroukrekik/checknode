//console.log("HELLO WORLD");
const generator = require("generate-password");

const password = generator.generate({
  length: 10,
  numbers: true,
});

console.log(password);

const http = require("node:http");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "farouk.rekok@gmail.com",
    pass: "456123_tounsi",
  },
});

var mailOptions = {
  from: "farouk.rekok@gmail.com",
  to: "faroukrekik23@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Node!!!!");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const fs = require("fs");

const data = fs.readFileSync("./Welcome.txt");
console.log(data.toString());
