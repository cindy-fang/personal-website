const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// Define environment variables
const { EMAIL_USER, EMAIL_PASS } = process.env;

// Create nodemailer transport
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

// Verify email transport
contactEmail.verify((error) => {
    if (error) {
        console.error("Error verifying email transport:", error);
    } else {
        console.log("Email transport ready to send");
    }
});

// Contact form submission endpoint
router.post("/contact", async (req, res) => {
    try {
        // Extract form data
        const { firstName, lastName, email, phone, message } = req.body;

        // Validate form data (add your validation logic here)

        // Construct email message
        const mailOptions = {
            from: `${firstName} ${lastName}`, 
            to: "cindyfang2001@gmail.com",
            subject: "Contact Form Submission - Personal Website",
            html: `<p>Name: ${firstName} ${lastName}</p> 
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
        };

        // Send email
        await contactEmail.sendMail(mailOptions);
        
        // Send success response
        res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        // Send error response
        res.status(500).json({ success: false, message: "Something went wrong, please try again later." });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
