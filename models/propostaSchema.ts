import * as mongoose from "mongoose";

const PropostaSchema = new mongoose.Schema({
  productId: { type: mongoose.Types.ObjectId },
  name: { type: String },
  email: { type: String },
  cpf: { type: String },
  birthDate: { type: Date },
  phone: { type: String },
  createDate: { type: Date, default: Date.now }
});

export default PropostaSchema;