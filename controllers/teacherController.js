const { Teacher, validateTeacher } = require("../models/teacherModel");

module.exports.getTeachers = async (req, res, next) => {
  const teachers = await Teacher.find();
  res.send(teachers);
};

module.exports.createTeacher = async (req, res) => {
  const { error } = validateTeacher(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, salary, specialization, phone, courses } = req.body;

  const teacher = await Teacher.create({
    name,
    salary,
    specialization,
    phone,
    courses,
  });
  res.status(201).send(teacher);
};

module.exports.updateTeacher = async (req, res) => {
  const { error } = validateTeacher(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!teacher) return res.status(404).send("Teacher in not found");
  res.status(200).send(teacher);
};

module.exports.deleteTeacher = async (req, res) => {
  const teacher = await Teacher.findByIdAndDelete(req.params.id);
  if (!teacher) return res.status(404).send("Teacher in not found");

  res.status(200).send("deleted");
};

module.exports.getTeacher = async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  if (!teacher) return res.status(404).send("Teacher not found");

  res.send(teacher);
};
