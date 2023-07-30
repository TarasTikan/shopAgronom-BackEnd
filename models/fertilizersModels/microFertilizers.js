const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");

const microFertilizersSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    culture: { type: String, required: true },
    description: { type: String, required: true },
    producer: { type: String, required: true },
    number: { type: String, required: true },
    compatibility: { type: String, required: true },
    mechanismAction: { type: String, required: true },
    spectrumAction: { type: String, required: true },
    toxicity: { type: String, required: true },
    characteristics: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

microFertilizersSchema.post("save", handleMongooseError);
const MicroFertilizers = model("microFertilizer", microFertilizersSchema);

module.exports = MicroFertilizers;
