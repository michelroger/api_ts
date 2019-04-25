import PartialRepository from "../repository/partialRepository";

class PartialService {
  get() {
    return PartialRepository.find({});
  }

  getById(_id) {
    return PartialRepository.findById(_id);
  }

  async getByToken(_id) {
    var promise;
    await PartialRepository.find({ _id: _id }, function (err, docs) {
      promise = docs
    });
    return promise;
  }

  create(Proposta) {
    return PartialRepository.create(Proposta);
  }

  update(_id, Proposta) {
    return PartialRepository.findOneAndUpdate(_id, Proposta);
  }

  delete(_id) {
    return PartialRepository.findOneAndDelete(_id);
  }
}

export default new PartialService();
