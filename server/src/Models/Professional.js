import mongoose from 'mongoose';

const { Schema } = mongoose;

const professionalSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['Director', 'Area Manager', 'Developer'],
      required: true,
    },
    module: {
      type: String,
      enum: [
        'Human Resources',
        'Full Stack Course',
        'Internship',
        'Interview',
        'Onboarding',
        'Tracking',
      ],
    },
  },
  { timestamps: true },
);

export default mongoose.model('Professional', professionalSchema);
