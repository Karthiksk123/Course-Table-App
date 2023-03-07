import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    lessonCount: {
      type: Number,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    lessonCompleted: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Data = mongoose.model("Data", dataSchema);
