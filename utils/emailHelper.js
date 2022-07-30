//batchSend.js
const nodemailer = require("nodemailer");

exports.sendEmail = async (message, email) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: 'attornea@gmail.com',
            pass: 'uolykqoajyjtopct'
        }
    });

    var mailOptions = {
        from: 'attornea@gmail.com',
        to: email,
        subject: 'Verify Email',
        text: `${message}`
        // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        return res.status(200).json("Email Sent")
    });


}