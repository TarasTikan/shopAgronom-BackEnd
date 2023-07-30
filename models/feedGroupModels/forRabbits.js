const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");
const rabbitProductSchema = new Schema(
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
rabbitProductSchema.post("save", handleMongooseError);

const Rabbit = model("rabbit", rabbitProductSchema);

module.exports = Rabbit;
