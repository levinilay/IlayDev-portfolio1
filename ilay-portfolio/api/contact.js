// Vercel Serverless Function for Contact Form
// This function handles POST requests from the contact form and sends emails using Nodemailer

const nodemailer = require('nodemailer');

// Email configuration from environment variables
// Make sure to set these in Vercel dashboard: Settings > Environment Variables
const EMAIL_USER = process.env.EMAIL_USER; // Your Gmail address
const EMAIL_PASS = process.env.EMAIL_PASS; // Your Gmail App Password (not regular password!)

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

// HTML email template
function createEmailHTML(name, email, message) {
    return `
    <!DOCTYPE html>
    <html dir="rtl" lang="he">
    <head>
        <meta charset="UTF-8">
        <style>
            body {
                font-family: 'Heebo', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                direction: rtl;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #f9f9f9;
                border-radius: 10px;
            }
            .header {
                background: linear-gradient(135deg, #9333ea, #a855f7);
                color: white;
                padding: 20px;
                border-radius: 10px 10px 0 0;
                text-align: center;
            }
            .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 10px 10px;
            }
            .field {
                margin-bottom: 20px;
            }
            .field-label {
                font-weight: bold;
                color: #9333ea;
                margin-bottom: 5px;
            }
            .field-value {
                padding: 10px;
                background: #f5f5f5;
                border-radius: 5px;
                border-right: 3px solid #9333ea;
            }
            .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>הודעה חדשה מהאתר</h2>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">שם:</div>
                    <div class="field-value">${name}</div>
                </div>
                <div class="field">
                    <div class="field-label">אימייל:</div>
                    <div class="field-value">${email}</div>
                </div>
                <div class="field">
                    <div class="field-label">הודעה:</div>
                    <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
            </div>
            <div class="footer">
                <p>הודעה זו נשלחה מהטופס באתר הפורטפוליו</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

// Main handler function
module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Validate environment variables
        if (!EMAIL_USER || !EMAIL_PASS) {
            console.error('Missing email credentials in environment variables');
            return res.status(500).json({ 
                error: 'שרת הדואר לא מוגדר כראוי. אנא פנה למנהל האתר.' 
            });
        }

        // Get form data from request body
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                error: 'כל השדות נדרשים' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'כתובת אימייל לא תקינה' 
            });
        }

        // Validate message length
        if (message.trim().length < 10) {
            return res.status(400).json({ 
                error: 'ההודעה חייבת להכיל לפחות 10 תווים' 
            });
        }

        // Email options
        const mailOptions = {
            from: `"פורטפוליו - ${name}" <${EMAIL_USER}>`,
            to: EMAIL_USER, // Send to yourself
            replyTo: email, // Allow replying directly to the sender
            subject: `הודעה חדשה מהאתר - ${name}`,
            html: createEmailHTML(name, email, message),
            text: `
הודעה חדשה מהאתר

שם: ${name}
אימייל: ${email}

הודעה:
${message}
            `.trim()
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Success response
        return res.status(200).json({ 
            success: true,
            message: 'ההודעה נשלחה בהצלחה' 
        });

    } catch (error) {
        // Log error for debugging (check Vercel logs)
        console.error('Error sending email:', error);

        // Return user-friendly error message
        return res.status(500).json({ 
            error: 'אירעה שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.' 
        });
    }
};
