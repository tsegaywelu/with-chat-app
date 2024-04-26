
const nodemailer = require("nodemailer");
const Usersadd = require("../models/Users");



async function sendConfirmationEmail(email, token) {
    // Create a Nodemailer transporter
    console.log("email",email,token);
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // Make sure to use the correct environment variables
            pass: process.env.PASSWORD,
        },
    })


    // Construct the confirmation link
    const link = `http://localhost:3000/api/confirmation/${token}`;

    // Define the email options
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Email Confirmation",
        text: `Please click on the following link to confirm your email: ${link}`,
    };

    try {
        // Send the email
        console.log("Sending confirmation email...");
        console.log(await transporter.sendMail(mailOptions));
        console.log("Confirmation email sent successfully.");
    } catch (error) {
        console.error("Error sending confirmation email:", error);
    }
}

async function sendConfirmationEmailHandler(req, res,next) {
    console.log("wow you are getting ");
    const { email } = req.body;
    
    // Check if user exists
    try {
        const user = await Usersadd.findOne({ email });
        if (user) {
            console.log("User found:");
            const token = "gv37rfg4789gf489fg"
             const sent = await sendConfirmationEmail(email, token);
            console.log("Confirmation email sent successfully.");
            next();
            

          /*   res.status(200).send("Confirmation email sent successfully."); */
            
        } else {
            /* res.status(404).send("User not found."); // Or handle as appropriate */
            console.log("User not found.");
        }
    } catch (error) {
        console.error("Error finding user:", error);
        res.status(500).send("Internal server error."); // Or handle as appropriate
    }
}

module.exports = { sendConfirmationEmailHandler };
