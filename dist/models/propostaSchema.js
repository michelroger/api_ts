"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const PropostaSchema = new mongoose.Schema({
    productId: { type: mongoose.Types.ObjectId },
    name: { type: String },
    email: { type: String },
    cpf: { type: String },
    birthDate: { type: Date },
    phone: { type: String },
    createDate: { type: Date, default: Date.now }
});
/* exporta um schema com o formato de proposta */
exports.default = PropostaSchema;
