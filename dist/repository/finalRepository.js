"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const propostaSchema_1 = require("../models/propostaSchema");
/* exporta um schema final */
exports.default = mongoose.model("final", propostaSchema_1.default);
