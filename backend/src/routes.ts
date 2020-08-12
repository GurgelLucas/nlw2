import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

// AULAS
routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

// CONNECTIONS
routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

// USERS
export default routes;
