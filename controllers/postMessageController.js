const transporter = require ('../utils/mailer') 
require ('dotenv').config();
const {EMAIL} = process.env;

const postMessageController = async (email, name, message)=>{

        const info = await transporter.sendMail({
            from: email, 
            to: EMAIL ,
            subject: ` ${name}: Consulta Portafolio `,
            text: `e-mail: ${email} envia este mensaje: ${message}`, // html body
        });
    
        return info;
}
module.exports = postMessageController