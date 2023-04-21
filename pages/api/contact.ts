import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter, TransportOptions } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transporter  = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MY_EMAIL_ADDRESS,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken
        }
      } as TransportOptions);

      const mailOptions = {
        from: name,
        to: process.env.MY_EMAIL_ADDRESS,
        subject: "Job Application",
        replyTo: email,
        text: message,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({success: false, message: 'Method not allowed' });
  }
}