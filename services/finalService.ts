import FinalRepository from "../repository/finalRepository";
import PartialController from "../controller/partialController";

/*
  classe responsável por realizar query na collection finals mongoDB
*/
class FinalService {
  get() {
    return FinalRepository.find({});
  }

  async getByCpf(cpf) {
    var promise;
    await FinalRepository.find({ cpf: cpf }, function (err, docs) {
      promise = docs
    });
    return promise;
  }

  getById(_id) {
    return FinalRepository.findById(_id);
  }

  create(req, res, Proposta) {
    //Deleto a Proposta Partial
    PartialController.delete(req, res);
    //Crio a proposta Final
    return FinalRepository.create(Proposta);
  }

  update(_id, Proposta) {
    return FinalRepository.findByIdAndUpdate(_id, Proposta);
  }

  delete(_id) {
    return FinalRepository.findOneAndDelete(_id);
  }
}

export default new FinalService();
