// app/api/send-email/route.js
import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();

    // Настройка транспортера для Gmail (нужны ваши учетные данные Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Ваш Gmail-адрес
        pass: 'your-app-password',    // Пароль приложения Gmail (не ваш обычный пароль)
      },
    });

    // Параметры email
    const mailOptions = {
      from: email, // Email отправителя (будет отображаться как "От" в письме)
      to: 'your-email@gmail.com', // Ваш Gmail-адрес, на который отправляем
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Отправка email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}