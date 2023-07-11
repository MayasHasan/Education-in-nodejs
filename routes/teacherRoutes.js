const express = require('express');
const router = express.Router();
const validateObjectId =require('../middleware/validationId');
const { getTeachers,getTeacher, createTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherController');

router.get('/',getTeachers);
router.get('/:id',validateObjectId,getTeacher);
router.post('/',createTeacher);
router.put('/:id',validateObjectId,updateTeacher);
router.delete('/:id',validateObjectId,deleteTeacher);
module.exports = router