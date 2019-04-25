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
const finalRepository_1 = require("../repository/finalRepository");
const partialController_1 = require("../controller/partialController");
/*
  classe responsável por realizar query na collection finals mongoDB
*/
class FinalService {
    get() {
        return finalRepository_1.default.find({});
    }
    getByCpf(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            var promise;
            yield finalRepository_1.default.find({ cpf: cpf }, function (err, docs) {
                promise = docs;
            });
            return promise;
        });
    }
    getById(_id) {
        return finalRepository_1.default.findById(_id);
    }
    create(req, res, Proposta) {
        //Deleto a Proposta Partial
        partialController_1.default.delete(req, res);
        //Crio a proposta Final
        return finalRepository_1.default.create(Proposta);
    }
    update(_id, Proposta) {
        return finalRepository_1.default.findByIdAndUpdate(_id, Proposta);
    }
    delete(_id) {
        return finalRepository_1.default.findOneAndDelete(_id);
    }
}
exports.default = new FinalService();
