const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");
const chickenProductSchema = new Schema(
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
chickenProductSchema.post("save", handleMongooseError);

const Chicken = model("chicken", chickenProductSchema);

module.exports = Chicken;
