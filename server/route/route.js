import express from "express";
import { addData, getAllData } from "../controller/controller.js";

const route = express.Router();

route.post("/addcourse", addData);
route.get("/courses", getAllData);

export default route;
