const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // to have variables in dotenv file

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
    console.log('in the fir req')
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/', (req, res) => {

    /* console.log('in the sec req')

    console.log('-----------------') */
    var data = req.body;

    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.mail,
            pass: process.env.password
        }
    });

    var mailOptions = {
        from: data.email,
        to: 'yaroslav.khudchenko@gmail.com',
        subject: 'contact from ' + data.email,
        html: data.message 
    };
/* 
    console.log(smtpTransport)
    console.log('-------')
    console.log(mailOptions) */
    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                res.send(error);
                res.send(response);
                console.log('response')
                console.log(error)
                console.log(response)
            } else {
                res.send('Success')
            }
            smtpTransport.close();
        });

})