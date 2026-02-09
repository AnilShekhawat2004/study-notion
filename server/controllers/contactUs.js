const {contactUsMail} = require("../mail/templates/contactFormRes");
const mailSender = require("../utils/mailSender");

exports.contactUs = async(req, res) => {
    try{
        //fetch data form req body
        const {firstName, lastName, email, message, contactNumber, countryCode} = req.body;

        //validation
        if(!firstName || !lastName || !email || !message || !contactNumber || !countryCode){
            return res.status(404).json({
                success:false,
                message:'All feilds are required to fill for contact us',
            })
        }

        //send mail 
        const mailRes = await mailSender(
            email,
            "Your request saved successfully",
            contactUsMail(firstName, lastName, email, message, contactNumber, countryCode),
        )

        //return response
        return res.status(200).json({
            success:true,
            message:'Email sent successfully',
            mailRes,
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong while sending mail',
        })
    }
}