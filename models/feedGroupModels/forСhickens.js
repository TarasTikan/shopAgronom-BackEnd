const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");
const chickenProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    producer: { type: String, required: true },
    number: { type: String, required: true },
    targetGroup: { type: String, required: true },
    type: { type: String, required: true },
    storage: { type: String, required: true },
    packaging: { type: String, required: true },
    characteristics: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
chickenProductSchema.post("save", handleMongooseError);

const Chicken = model("chicken", chickenProductSchema);

module.exports = Chicken;
