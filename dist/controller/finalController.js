"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finalService_1 = require("../services/finalService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class PartialController {
    get(req, res) {
        finalService_1.default.get()
            .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, proposta))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        finalService_1.default.getById(_id)
            .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, proposta))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        const dataset = req.body;
        const name = dataset.name;
        const email = dataset.email;
        const cpf = dataset.cpf;
        const birthDate = dataset.birthDate;
        const phone = dataset.phone;
        var errors = [];
        if (name === undefined || name === "") {
            errors.push({ "name": "Informe um nome" });
        }
        if (!helper_1.default.validateEmail(email)) {
            errors.push({ "email": "Informe um e-mail válido" });
        }
        if (!helper_1.default.validateCPF(cpf)) {
            errors.push({ "cpf": "Informe um cpf válido" });
        }
        if (!helper_1.default.validateBirthDate(birthDate)) {
            errors.push({ "birthDate": "Informe a data de nascimento, no formato YYYY-MM-DD" });
        }
        else if (!helper_1.default.validateIdade(birthDate)) {
            errors.push({ "birthDate": "O usuário menor de 18 ou maior que 65 anos" });
        }
        if (!helper_1.default.validatePhone(phone)) {
            errors.push({ "phone": "Informe um fone válido no formato: (99) 99999-9999" });
        }
        if (errors) {
            helper_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, errors);
        }
        else {
            /*
            FinalService.create(dataset)
              .then(proposta =>
                Helper.sendResponse(
                  res,
                  HttpStatus.OK,
                  {
                    "success": HttpStatus.OK,
                    "token": proposta.id
                  }
                )
              )
              .catch(error => console.error.bind(console, `Error ${error}`));
                  */
        }
    }
    update(req, res) {
        const _id = req.params.id;
        let dataset = req.body;
        finalService_1.default.update(_id, dataset)
            .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, "Proposta foi atualiza com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new PartialController();
