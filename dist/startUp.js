"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db_1 = require("./infra/db");
//import Auth from "./infra/auth";
//import uploads from "./infra/uploads";
//import newsRouter from "./router/newsRouter";
const propostaRouter_1 = require("./router/propostaRouter");
/*
  Classe responsável por realizar o start e configurações da api
*/
class StartUp {
    //private bodyParser;
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin: "*"
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "1.0.0" });
        });
        this.app.use("/", propostaRouter_1.default);
    }
}
exports.default = new StartUp();
