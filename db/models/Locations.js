import mongoose from "mongoose";
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
