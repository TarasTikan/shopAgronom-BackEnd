const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");
const basketProductsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    producer: { type: String, required: true },
    number: { type: String, required: true },
    сharacteristics: { type: String, required: true },
    culture: { type: String },
    activeSubstance: { type: String },
    preparativeForm: { type: String },
    rateOfUser: { type: String },
    toxicityClass: { type: String },
    storagePeriod: { type: String },
    recommendations: { type: String },
    targetGroup: { type: String },
    type: { type: String },
    storage: { type: String },
    packaging: { type: String },
    compatibility: { type: String },
    mechanismAction: { type: String },
    spectrumAction: { type: String },
    toxicity: { type: String },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
basketProductsSchema.post("save", handleMongooseError);

const BasketProducts = model("basketProduct", basketProductsSchema);

module.exports = BasketProducts;
