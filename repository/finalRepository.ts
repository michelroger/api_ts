import * as mongoose from "mongoose";
import FinalSchema from "../models/propostaSchema";
/* exporta um schema final */
export default mongoose.model("final", FinalSchema);