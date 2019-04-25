"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const partialService_1 = require("../services/partialService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
/*
  classe responsável controlar ações da partial
*/
class PartialController {
    get(req, res) {
        partialService_1.default.get()
            .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, proposta))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        partialService_1.default.getById(_id)
            .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, proposta))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let dataset = req.body;
            const _id = req.body.token;
            if (_id) {
                var promise = yield partialService_1.default.getByToken(_id);
                if (promise.length > 0) {
                    partialService_1.default.update(_id, dataset)
                        .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, {
                        "success": HttpStatus.OK,
                        "token": proposta.id
                    }))
                        .catch(error => console.error.bind(console, `Error ${error}`));
                }
                helper_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, {
                    "success": HttpStatus.BAD_REQUEST,
                    "token": `${_id} não foi localizado para realizar o update`
                });
            }
            else {
                partialService_1.default.create(dataset)
                    .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, {
                    "success": HttpStatus.OK,
                    "token": proposta.id
                }))
                    .catch(error => console.error.bind(console, `Error ${error}`));
            }
        });
    }
    update(req, res) {
        const _id = req.params.id;
        let proposta = req.body;
        partialService_1.default.update(_id, proposta)
            .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, {
            "success": HttpStatus.OK,
            "token": proposta.id
        }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id || req.params.token;
        partialService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Partial deletada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new PartialController();
