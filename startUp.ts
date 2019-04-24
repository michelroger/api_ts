import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import Database from "./infra/db";
//import Auth from "./infra/auth";
//import uploads from "./infra/uploads";
//import newsRouter from "./router/newsRouter";
import propostaRouter from "./router/propostaRouter";

class StartUp {
  public app: express.Application;
  private _db: Database;
  //private bodyParser;
  constructor() {
    this.app = express();

    this._db = new Database();
    this._db.createConnection();

    this.middler();
    this.routes();
  }

  enableCors() {
    const options: cors.CorsOptions = {
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
    this.app.use("/", propostaRouter);
  }
}

export default new StartUp();
