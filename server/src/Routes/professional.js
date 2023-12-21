/* eslint-disable import/no-unresolved */
import express from "express";
import professional from "../Controllers/professional";
import validations from "../Validations/professional";

const router = express.Router();

router.get("/", professional.list);

router.get("/:id", professional.findOne);

router.post("/", validations.validateCreation, professional.create);

router.put("/:id", validations.validateUpdate, professional.update);

router.delete("/:id", professional.deleteItem);

export default router;
