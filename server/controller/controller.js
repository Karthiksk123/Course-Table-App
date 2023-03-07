import { Data } from "../model/data.js";

export const addData = async (req, res) => {
  try {
    const data = await Data.create({
      courseName: req.body.courseName,
      lessonCount: req.body.lessonCount,
      startDate: req.body.startDate,
      lessonCompleted: req.body.lessonCompleted,
      duration: req.body.duration,
    });

    const newData = await data.save();

    return res.status(200).json(newData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllData = async (req, res) => {
  try {
    const coursesData = await Data.find();

    return res.status(200).json(coursesData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
