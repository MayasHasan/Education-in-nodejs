const { Course, validateCourse } = require("../models/courseModel");

module.exports.getCourses = async (req, res, next) => {
  const courses = await Course.find();
  res.send(courses);
};

module.exports.createCourse = async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { title, price, date, description, teacher } = req.body;
  const course = await Course.create({
    title,
    price,
    date,
    description,
    teacher,
  });
  res.status(201).send(course);
};

module.exports.updateCourse = async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!course) return res.status(404).send("course in not found");
  res.status(201).send(course);
};

module.exports.deleteCourse = async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).send("course in not found");

  res.status(200).send("deleted");
};

module.exports.getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id)
    .populate({ path: "teacher", select: "name -_id" })
    .select("-__v");
  if (!course) return res.status(404).send("Course not found");

  res.send(course);
};
