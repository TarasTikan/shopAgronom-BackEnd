const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");
const turkeyProductSchema = new Schema(
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
turkeyProductSchema.post("save", handleMongooseError);

const Turkey = model("turkey", turkeyProductSchema);

module.exports = Turkey;
