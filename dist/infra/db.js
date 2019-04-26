"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
/* Classe responsável por realizar a conexão com o mongoDb via mongoose */
class Database {
    constructor() {
        this.DB_URL = "mongodb://link-db/foregon";
    }
    createConnection() {
        mongoose.connect(this.DB_URL, { useNewUrlParser: true });
    }
}
exports.default = Database;
