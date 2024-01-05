import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  star_id: {
    type: String,
    required: true,
    trim: true,
  },
  featured_image: { type: String, minLength: 10, trim: true },
  images: [],
});

const Album = mongoose.model("Album", albumSchema);

export { Album, albumSchema };
