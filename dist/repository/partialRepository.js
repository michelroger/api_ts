"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const propostaSchema_1 = require("../models/propostaSchema");
exports.default = mongoose.model("partial", propostaSchema_1.default);
