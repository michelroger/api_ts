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
const finalService_1 = require("../services/finalService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
const moment = require("moment");
/*
  classe responsável controlar ações da Final
*/
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
        return __awaiter(this, void 0, void 0, function* () {
            req.body.cpf = String(req.body.cpf).replace(" ", "").replace(".", "").replace(".", "").replace(".", "").replace("-", "").replace(",", "");
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
            if (errors.length == 0) {
                //verificação de proposta por 90 dias do cpf
                var promise = yield finalService_1.default.getByCpf(cpf);
                if (promise.length > 0) {
                    var flag = false;
                    const dataNow = moment(new Date, "YYYY-MM-DD", true);
                    promise.forEach(function (proposta) {
                        let dataProposta = moment(proposta.createDate, "YYYY-MM-DD", true);
                        let dif = dataNow.diff(dataProposta, "days");
                        if (dif <= 90) {
                            flag = true;
                        }
                    });
                    if (flag) {
                        errors.push({ "cpf": `cpf: ${cpf}, já realizou uma proposta nos últimos 90 dias.` });
                    }
                }
            }
            if (errors.length > 0) {
                helper_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, errors);
            }
            else {
                finalService_1.default.create(req, res, dataset)
                    .then(proposta => helper_1.default.sendResponse(res, HttpStatus.OK, {
                    "success": HttpStatus.OK,
                    "token": proposta.id
                }))
                    .catch(error => console.error.bind(console, `Error ${error}`));
            }
        });
    }
}
exports.default = new PartialController();
