import { Schema, model } from "mongoose";

const trailSchema = new Schema(
  {
    name: { type: String, required: true },
    picture: { type: String, required: true },
    difficulty: { type: String, required: true },
    location: { type: String, required: true },
    miles: { type: Number, required: true },
    routeType: { type: String, required: true },
    description: { type: String, required: true },
    suitability: { type: String, required: false },
    attractions: { type: String, required: false },
    gMaps: { type: String, required: true },
  },
  { timestamps: true }
);

const Trail = model("Trail", trailSchema);

export default Trail;