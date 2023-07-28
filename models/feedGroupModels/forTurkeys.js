const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");
const turkeyProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    producer: { type: String, required: true },
    number: { type: String, required: true },
    TargetGroup: { type: String, required: true },
    Type: { type: String, required: true },
    Storage: { type: String, required: true },
    Packaging: { type: String, required: true },
    Characteristics: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
turkeyProductSchema.post("save", handleMongooseError);

const Turkey = model("turkey", turkeyProductSchema);

module.exports = Turkey;
