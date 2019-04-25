import * as mongoose from "mongoose";
/* Classe responsável por realizar a conexão com o mongoDb via mongoose */
class Database {
  private DB_URL = "mongodb://localhost:27017/foregon";

  createConnection() {
    mongoose.connect(this.DB_URL, { useNewUrlParser: true });
  }
}

export default Database;
