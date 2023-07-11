const express = require('express');
const router = express.Router();
const validateObjectId =require('../middleware/validationId');
const { getCourse,getCourses, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController');

router.get('/',getCourses);
router.get('/:id',validateObjectId,getCourse);
router.post('/',createCourse);
router.put('/:id',validateObjectId,updateCourse);
router.delete('/:id',validateObjectId,deleteCourse);
module.exports = router