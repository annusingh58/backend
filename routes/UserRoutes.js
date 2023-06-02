import  express from "express";

import { login, register,getUserByEmail,updateUser} from "../controllers/UserControllers.js";
import { addProduct,getAllProducts} from "../controllers/ProductControllers.js";


// import { getUserByEmail } from "../controllers/UserControllers.js";
// import { updateUser } from "../controllers/UserControllers.js";
import { checkEmail,checkName } from "../middleware/authMiddleware.js";
import { otpRegisteration } from "../controllers/OtpControllers.js";
import { otpCheckForRegister } from "../controllers/OtpControllers.js";

// import { otpEmailRegistration ,otpNumberRegistration } from "../controllers/OtpControllers.js";

import { otpCkeckForEmail, otpCkeckForNumber, otpEmailRegistration, otpNumberRegistration} from "../controllers/OtpControllers.js";

var router = express.Router();

// router.get('/login',login);
// router.get('/register',register);

router.post('/login',login);
router.post('/register',register);

router.post('/add-product',addProduct);
router.get('/get-all-products', getAllProducts);
router.post('/getuserbyYemail',checkEmail,getUserByEmail);


router.post('/update-User',checkEmail,checkName,updateUser)
router.post('/getUserByEmail',getUserByEmail);

router.post('/otp-register', otpRegisteration);
router.post('/otp-check-register', otpCheckForRegister)

router.post('/otpCkeckForNumber', otpCkeckForNumber);
router.post('/otpCkeckForEmail', otpCkeckForEmail);





export default router;