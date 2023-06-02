import { v4 as uuidv4} from 'uuid';
import Users from '../modals/Users.js';


// .................otp otpRegisteration......................

export const otpRegisteration =async (req,res) => {
     
 try{
    const{ number,email } =req.body;
    if(!number) return res.send("Number is required");
    if(!email) return res.send("Email is required");
     

    var code = uuidv4();
    // console.log(code,"code here")
    // res.send(code);

    const isNumberpresent = await Users.find({number}).exec();
    console.log(isNumberpresent,"isNumberpresent")
     if(!isNumberpresent.length) return res.send("number already used!")
    
     const isEmailpresent = await Users.find({email}).exec();
     if(!isEmailpresent) return res.send("email already used!")
    
    
    
    
     const user = new Users ({
        email :email,
        number:number,
        otp :code
    })
    await user.save();
    res.send("check your mobile no and gmail for otp");

    

    }catch(error){
        return res.send(error)
    }
}

// .................otpCheckForRegister...................

export const otpCheckForRegister = async(req,res) =>{
try{
   const{number ,email,otp} = req.body;

   if(!number) return res.send("Number is required")
   if(!email) return res.send("Email is required")
   if(!otp) return res.send("Otp is required")

   const user = await Users.find({email}).exec();
   if(!user.length) return res.send("user not found");

   if(user[0].otp== otp){

        return res.send("registeration done");

   }
   return res.send("otp  is wrong");
   
//    return res.send (user[0]);



} catch(error){
    return res.sen(error);
}


}



// .................otpNumberRegistration...............


export const otpNumberRegistration = async (req, res) =>{
    try{
        const {number} = req.body;
        if(!number) return res.send("number not found.")
        
        var codeforNumber = uuidv4();
        

        const isNummberPresent = await Users.find({number}).exec();
        if(isNummberPresent.length) return res.send("Number already used")
        

        const user = new Users({
            number : number,
            otpForNumber : codeforNumber,
            isNumberVerified : false

            
        })
        await user.save();
        res.send("Check your mobile number  for otp.")

    }catch(error){
        return res.send(error);
    }
}



// .............otpEmailRegistration..................................


export const otpEmailRegistration = async (req, res) =>{
    try{
        const { number,email} = req.body;
        if(!number) return res.send("number not found.")
        if(!email) return res.send("email is required")
        
        var codeforEmail = uuidv4();

        const isNummberPresent = await Users.find({number}).exec();
        
        if(isNummberPresent[0].number==number){
            const user = await  Users.insert({number},{ email: email, otpForEmail : codeforEmail} )
            console.log(user);
            await user.save();
            res.send("Check your mobile email for otp.")
        }else{
            return res.send("number is wrong")
        } 


       

    }catch(error){
        return res.send(error);
    }
}



export const otpCkeckForNumber = async (req, res) => {
    try{
        const {number,otp} = req.body;
        if(!number) return res.send("number is required");
        if(!otp) return res.send("otp is required");

        const user = await Users.find({number}).exec();
        if(!user.length) return res.send("user not found");

        if(user[0].otpForNumber== otp){

            const user = await Users.findOneAndUpdate({ number }, { isNumberVerified: true }).exec();
            await user.save();
            // res.send("Check your mobile number  for OTP.")
         return res.send("Nummber is verified");

        }
        return res.send("otp wrong plz try again");

        // return res.send(user[0]);


    }catch(error){
        return res.send(error);
    }
}

export const otpCkeckForEmail = async (req, res) => {
    try{
        const {email,otp} = req.body;
        if(!email) return res.send("email is required");
        if(!otp) return res.send("otp is required");

        const user = await Users.find({email}).exec();
        if(!user.length) return res.send("user not found");

        if(user[0].otpForEmail== otp){
            const user = await Users.findOneAndUpdate({ email }, { isEmailVerified: true }).exec();
            await user.save();
            // res.send("Check your mobile number  for otp.")
         return res.send("Emaail is verified");

        }
        return res.send("otp wrong plz try again");

        // return res.send(user[0]);


    }catch(error){
        return res.send(error);
    }
}