"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finalRepository_1 = require("../repository/finalRepository");
class FinalService {
    get() {
        return finalRepository_1.default.find({});
    }
    getById(_id) {
        return finalRepository_1.default.findById(_id);
    }
    create(Proposta) {
        return finalRepository_1.default.create(Proposta);
    }
    update(_id, Proposta) {
        return finalRepository_1.default.findByIdAndUpdate(_id, Proposta);
    }
    delete(_id) {
        return finalRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new FinalService();
