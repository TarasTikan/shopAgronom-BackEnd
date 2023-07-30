const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");
const desiccantsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    producer: { type: String, required: true },
    culture: { type: String, required: true },
    number: { type: String, required: true },
    activeSubstance: { type: String, required: true },
    preparativeForm: { type: String, required: true },
    rateOfUser: { type: String, required: true },
    toxicityClass: { type: String, required: true },
    storagePeriod: { type: String, required: true },
    characteristics: { type: String, required: true },
    recommendations: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
desiccantsSchema.post("save", handleMongooseError);

const Desiccants = model("desiccant", desiccantsSchema);

module.exports = Desiccants;
