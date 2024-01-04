import mongoose from "mongoose";
import Joi from "joi";

function validateStar(star: any) {
  const starSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    bio: Joi.string().min(3),
    dp: Joi.string().min(10),
    dob: Joi.date(),
    ig_link: Joi.string().min(10),
    x_link: Joi.string().min(10),
    ph_link: Joi.string().min(10),
    of_link: Joi.string().min(10),
    web: Joi.string().min(10),
    rating: Joi.number().min(0.1).max(5),
  });

  return starSchema.validate(star);
}

const starSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
  },
  bio: {
    type: String,
    minLength: 3,
    trim: true,
  },
  dp: { type: String, minLength: 10, trim: true },
  dob: { type: Date },
  ig_link: { type: String, minLength: 10 },
  x_link: { type: String, minLength: 10 },
  ph_link: { type: String, minLength: 10 },
  of_link: { type: String, minLength: 10 },
  web: { type: String, minLength: 10 },
  rating: { type: Number, minLength: 0.1, maxLength: 5 },
});

const Star = mongoose.model("Star", starSchema);

export { validateStar, Star, starSchema };
