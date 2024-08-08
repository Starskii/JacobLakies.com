const router = require('express').Router();
const nodemailer = require('nodemailer');


router.post('/contact', (req, res) => {
    let data = req.body;
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "Please enter values to all fields."});
    }

    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: "jacoblakiessoftware@gmail.com",
            pass: "zqyy cwba kkra zyfw"
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'jacoblakiessoftware@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        <h3>Information</h3>
        <ul>
        <li> Name: ${data.name} </li>
        <li> Email: ${data.email} </li>
        <li> Message: ${data.message} </li>
        </ul>`
    };

    smtpTransporter.sendMail(mailOptions, (error) => {
        try {
            if(error){
                return res.status(400).json({msg: "Bad Request."})
            }
            res.status(200).json({msg: "Success."});
        } catch (error) {
            if (error) {
                return res.status(600).json({msg: "Server Error."});
            }
        }
    });
});

module.exports=router;