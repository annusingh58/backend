import  express from "express";

import { login, register } from "../controllers/UserControllers.js";
import { addProduct,getAllProducts } from "../controllers/ProductControllers.js";

var router = express.Router();

// router.get('/login',login);
// router.get('/register',register);

router.post('/login',login);
router.post('/register',register);

router.post('/add-product',addProduct);
router.get('/get-all-products', getAllProducts)

export default router;