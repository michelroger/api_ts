"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const partialRepository_1 = require("../repository/partialRepository");
class PartialService {
    get() {
        return partialRepository_1.default.find({});
    }
    getById(_id) {
        return partialRepository_1.default.findById(_id);
    }
    getByToken(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var promise;
            yield partialRepository_1.default.find({ _id: _id }, function (err, docs) {
                promise = docs;
            });
            return promise;
        });
    }
    create(Proposta) {
        return partialRepository_1.default.create(Proposta);
    }
    update(_id, Proposta) {
        return partialRepository_1.default.findOneAndUpdate(_id, Proposta);
    }
    delete(_id) {
        return partialRepository_1.default.findOneAndDelete(_id);
    }
}
exports.default = new PartialService();
