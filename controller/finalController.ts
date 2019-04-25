import FinalService from "../services/finalService";
import * as express from "express";
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";
import * as moment from "moment";
/*
  classe responsável controlar ações da Final
*/
class PartialController {


  get(req, res) {
    FinalService.get()
      .then(proposta => Helper.sendResponse(res, HttpStatus.OK, proposta))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    FinalService.getById(_id)
      .then(proposta => Helper.sendResponse(res, HttpStatus.OK, proposta))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  async create(req, res) {

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

    if (!Helper.validateEmail(email)) {
      errors.push({ "email": "Informe um e-mail válido" });
    }

    if (!Helper.validateCPF(cpf)) {
      errors.push({ "cpf": "Informe um cpf válido" });
    }

    if (!Helper.validateBirthDate(birthDate)) {
      errors.push({ "birthDate": "Informe a data de nascimento, no formato YYYY-MM-DD" });
    } else if (!Helper.validateIdade(birthDate)) {
      errors.push({ "birthDate": "O usuário menor de 18 ou maior que 65 anos" });
    }

    if (!Helper.validatePhone(phone)) {
      errors.push({ "phone": "Informe um fone válido no formato: (99) 99999-9999" });
    }

    if (errors.length == 0) {
      //verificação de proposta por 90 dias do cpf

      var promise = await FinalService.getByCpf(cpf)

      if (promise.length > 0) {
        var flag = false;
        const dataNow = moment(new Date, "YYYY-MM-DD", true)
        promise.forEach(function (proposta) {
          let dataProposta = moment(proposta.createDate, "YYYY-MM-DD", true)
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
      Helper.sendResponse(res, HttpStatus.BAD_REQUEST, errors)
    } else {

      FinalService.create(req, res, dataset)
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

    }
  }


}

export default new PartialController();
