import * as mongoose from "mongoose";
import PropostaSchema from "../models/propostaSchema";

export default mongoose.model("partial", PropostaSchema);
