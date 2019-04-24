import FinalRepository from "../repository/finalRepository";
import PartialController from "../controller/partialController";


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

    return FinalRepository.create(Proposta);
  }

  update(_id, Proposta) {
    return FinalRepository.findByIdAndUpdate(_id, Proposta);
  }

  delete(_id) {
    return FinalRepository.findByIdAndRemove(_id);
  }
}

export default new FinalService();
