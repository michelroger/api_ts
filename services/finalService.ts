import FinalRepository from "../repository/finalRepository";

class FinalService {
  get() {
    return FinalRepository.find({});
  }

  getById(_id) {
    return FinalRepository.findById(_id);
  }

  create(Proposta) {
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
