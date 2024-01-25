import express from "express"
import prodcutActions from "../controllers/productController.js"
const router = express.Router()

router.get("/",prodcutActions.getAll)
router.get("/:id",prodcutActions.getByID)
router.post("/",prodcutActions.createNew)
router.delete("/:id",prodcutActions.deleteByID)

export default router