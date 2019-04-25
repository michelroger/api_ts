"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const partialController_1 = require("../controller/partialController");
const finalController_1 = require("../controller/finalController");
const propostaRouter = express.Router();
/*
  realiza configurações das rotas da api
*/
propostaRouter.route("/api/v1/partial").get(partialController_1.default.get);
propostaRouter.route("/api/v1/partial").post(partialController_1.default.create);
propostaRouter.route("/api/v1/partial/:id").put(partialController_1.default.update);
propostaRouter.route("/api/v1/partial/:id").delete(partialController_1.default.delete);
propostaRouter.route("/api/v1/final").post(finalController_1.default.create);
propostaRouter.route("/api/v1/final").get(finalController_1.default.get);
exports.default = propostaRouter;
