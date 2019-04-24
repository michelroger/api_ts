"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partialRepository_1 = require("../repository/partialRepository");
class PartialService {
    get() {
        return partialRepository_1.default.find({});
    }
    getById(_id) {
        return partialRepository_1.default.findById(_id);
    }
    create(Proposta) {
        return partialRepository_1.default.create(Proposta);
    }
    update(_id, Proposta) {
        return partialRepository_1.default.findByIdAndUpdate(_id, Proposta);
    }
    delete(_id) {
        return partialRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new PartialService();
