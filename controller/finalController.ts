import FinalService from "../services/finalService";
import * as express from "express";
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";
import * as Moment from "moment"

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

    if (errors) {
      Helper.sendResponse(res, HttpStatus.BAD_REQUEST, errors)
    } else {
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

    FinalService.update(_id, dataset)
      .then(proposta =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Proposta foi atualiza com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  /*
   delete(req, res) {
    const _id = req.params.id;

    PropostaService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "Proposta deletada com sucesso!")
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
  */

}

export default new PartialController();
