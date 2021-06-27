import { createTransport } from 'nodemailer';
import { smtpConfig } from '../config/smtp';

const transporter = createTransport({
  host: smtpConfig.host,
  port: smtpConfig.port,
  secure: false,
  auth: {
    user: smtpConfig.user,
    pass: smtpConfig.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendMail(
  sender: string,
  receiver: string,
  tag: string,
  message: string,
): Promise<void> {
  await transporter.sendMail({
    from: 'NLW - Valoriza <testedecontato75@gmail.com>',
    subject: `Você recebe um novo elogio :) - ${tag}`,
    text: message,
    to: receiver,
  });
}
