import PartialRepository from "../repository/partialRepository";

class PartialService {
  get() {
    return PartialRepository.find({});
  }

  getById(_id) {
    return PartialRepository.findById(_id);
  }

  create(Proposta) {
    return PartialRepository.create(Proposta);
  }

  update(_id, Proposta) {
    return PartialRepository.findByIdAndUpdate(_id, Proposta);
  }

  delete(_id) {
    return PartialRepository.findByIdAndRemove(_id);
  }
}

export default new PartialService();
