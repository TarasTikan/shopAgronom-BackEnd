const { Schema, model } = require("mongoose");
const {handleMongooseError} = require('../../helpers')
const herbicidesSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    producer: { type: String, required: true },
    culture: { type: String, required: true },
    number: { type: String, required: true },
    ActiveSubstance: { type: String, required: true },
    PreparativeForm: { type: String, required: true },
    RateOfUser: { type: String, required: true },
    ToxicityClass: { type: String, required: true },
    StoragePeriod: { type: String, required: true },
    Characteristics: { type: String, required: true },
    Recommendations: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
herbicidesSchema.post("save", handleMongooseError);

const Herbicides = model("herbicide", herbicidesSchema);

module.exports = Herbicides;
// треба сюда добавити joi схему