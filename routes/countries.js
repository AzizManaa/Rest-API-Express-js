import express from "express";
import {
  createCountry,
  getCountry,
  getCountries,
  deleteCountry,
  updateCountry,
} from "../controllers/countries.js";
const router = express.Router();

router.get("/", getCountries);
router.post("/", createCountry);
router.get("/:code", getCountry);
router.delete("/:code", deleteCountry);
router.patch("/:ccode", updateCountry);
export default router;
