import * as mongoose from "mongoose";
import PropostaSchema from "../models/propostaSchema";
/* exporta um schema partial */
export default mongoose.model("partial", PropostaSchema);
