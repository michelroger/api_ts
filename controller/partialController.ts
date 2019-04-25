import PartialService from "../services/partialService";
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";


/*
  classe responsável controlar ações da partial
*/
class PartialController {


  get(req, res) {
    PartialService.get()
      .then(proposta => Helper.sendResponse(res, HttpStatus.OK, proposta))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    PartialService.getById(_id)
      .then(proposta => Helper.sendResponse(res, HttpStatus.OK, proposta))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }


  async create(req, res) {
    let dataset = req.body;
    const _id = req.body.token;



    if (_id) {
      var promise = await PartialService.getByToken(_id)

      if (promise.length > 0) {

        PartialService.update(_id, dataset)
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

      Helper.sendResponse(
        res,
        HttpStatus.BAD_REQUEST,
        {
          "success": HttpStatus.BAD_REQUEST,
          "token": `${_id} não foi localizado para realizar o update`
        }
      )
    }
    else {
      PartialService.create(dataset)
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

  update(req, res) {
    const _id = req.params.id;
    let proposta = req.body;

    PartialService.update(_id, proposta)
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

  delete(req, res) {
    const _id = req.params.id || req.params.token;

    PartialService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "Partial deletada com sucesso!")
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }


}

export default new PartialController();
