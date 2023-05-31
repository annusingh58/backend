import  express from "express";

// import { login, register } from "../controllers/UserControllers.js";
import { login, register,getUserByEmail,updateUser} from "../controllers/UserControllers.js";
import { addProduct,getAllProducts} from "../controllers/ProductControllers.js";


// import { getUserByEmail } from "../controllers/UserControllers.js";
// import { updateUser } from "../controllers/UserControllers.js";
import { checkEmail,checkName } from "../middleware/authMiddleware.js";
var router = express.Router();

// router.get('/login',login);
// router.get('/register',register);

router.post('/login',login);
router.post('/register',register);

router.post('/add-product',addProduct);
router.get('/get-all-products', getAllProducts);
router.post('/getuserbyYemail',checkEmail,getUserByEmail);


router.post('/update-User',checkEmail,checkName,updateUser)
router.post('/getUserByEmail',getUserByEmail)




export default router;