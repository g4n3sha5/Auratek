import {mailOptions, transporter} from "/config/nodemailer";


const handler = async (req, res) =>{
    if (req.method === 'POST'){
        const data = req.body;

        let message = `
        <h2>Zapytanie z formularza ze strony www.auratek.pl od klienta ${data.name} o adresie mailowym ${data.email}</h2>
        <br/><br/>
        
         ${data.message}`

        try{
            await transporter.sendMail({
                ...mailOptions,
                subject : data.subject,
                html: message,

            })
        }
        catch (error){
            console.log(error)
        }
    }

    return res.send(200);
}


export default handler