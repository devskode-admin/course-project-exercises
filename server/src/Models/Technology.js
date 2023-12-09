/* eslint-disable eol-last */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const technologySchema = new Schema(
  {
    name: { type: String, required: true },
    development_side: {
      type: String,
      enum: ['Frontend', 'Backend', 'Fullstack'],
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Technology', technologySchema);