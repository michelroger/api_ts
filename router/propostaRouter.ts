import * as express from "express";
import PartialController from "../controller/partialController";
import FinalController from "../controller/finalController";

const propostaRouter = express.Router();

propostaRouter.route("/api/v1/partial").get(PartialController.get);
propostaRouter.route("/api/v1/partial").post(PartialController.create);
propostaRouter.route("/api/v1/partial/:id").put(PartialController.update);
propostaRouter.route("/api/v1/final").post(FinalController.create);
export default propostaRouter;


//propostaRouter.route("/api/v1/proposta").get(PropostaController.get);
//propostaRouter.route("/api/v1/proposta/:id").get(PropostaController.getById);
//propostaRouter.route("/api/v1/proposta").post(PropostaController.create);
//propostaRouter.route("/api/v1/proposta/:id").put(PropostaController.update);
//propostaRouter.route("/api/v1/proposta/:id").delete(PropostaController.delete);