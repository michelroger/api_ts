import * as express from "express";
import PartialController from "../controller/partialController";
import FinalController from "../controller/finalController";

const propostaRouter = express.Router();

propostaRouter.route("/api/v1/partial").get(PartialController.get);
propostaRouter.route("/api/v1/partial").post(PartialController.create);
propostaRouter.route("/api/v1/partial/:id").put(PartialController.update);
propostaRouter.route("/api/v1/partial/:id").delete(PartialController.delete);


propostaRouter.route("/api/v1/final").post(FinalController.create);
propostaRouter.route("/api/v1/final").get(FinalController.get);


export default propostaRouter;