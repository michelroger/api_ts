"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partialService_1 = require("../services/partialService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
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
        let dataset = req.body;
        const _id = req.body.token;
        if (_id) {
            partialService_1.default.update(_id, dataset)
                .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, {
                "success": HttpStatus.OK,
                "token": proposta.id
            }))
                .catch(error => console.error.bind(console, `Error ${error}`));
        }
        else {
            partialService_1.default.create(dataset)
                .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, {
                "success": HttpStatus.OK,
                "token": proposta.id
            }))
                .catch(error => console.error.bind(console, `Error ${error}`));
        }
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
        const _id = req.params.id;
        partialService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Proposta deletada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new PartialController();
