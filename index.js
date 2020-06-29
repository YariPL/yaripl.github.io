const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

require("dotenv").config(); // to have variables in dotenv file

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/", (req, res) => {
  let data = req.body;

  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.mail_config,
      pass: process.env.mail_access,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "yaroslav.khudchenko@gmail.com",
    subject: "contact from " + data.email,
    html: data.message,
  };
  
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
      res.send(response);
      res.send("responsssse");
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
