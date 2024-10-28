const nodemailer = require('nodemailer');

async function sendEmail(content) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'SEU_EMAIL@gmail.com',
            pass: 'SUA_SENHA'
        }
    });

    let mailOptions = {
        from: 'SEU_EMAIL@gmail.com',
        to: 'DESTINATARIO@gmail.com',
        subject: 'Dados Scrapeados',
        text: content.join('\n')
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar email:', error);
    }
}

module.exports = sendEmail;
