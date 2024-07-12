const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
exports.sendMail = (req, res) => {
    const { name, email, slot, text } = req.body;
    console.log(name);
    const doctemail = email;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: doctemail,
        subject: `Consultation Booking Slot of - ${slot}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${text}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Consultation booked. Email sent to doctor: ' + info.response);
    });
}