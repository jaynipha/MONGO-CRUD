const express = require('express');
const courseModel = require('../models/courses')
const data = require('../exercise-data.json')
const router = express.Router()
const joi = require('joi');


router.post('/createCourse', async (req, res)=>{
 for (let i = 0; i < data.length;  i++) {
        const dataSchema = {
            tags: data[i].tags,
            date: data[i].date,
            name: data[i].name,
            author: data[i].author,
            isPublished: data[i].isPublished,
            price: data[i].price,
        }
        const newCourse = new courseModel(dataSchema)
        await newCourse.save()
    }
 
    res.status(201).json({
        status:true,
        message: 'the courses have been created'
    })
})

router.get('/getCourses', async(req, res)=>{
    const allCourses = await courseModel.find()
        res.status(200).json({
            status:true,
            message: 'the courses have been fetched succesfully',
            data: allCourses,
        })

})
//get one course

router.get('/getOneCourse/:id', async (req, res)=>{

    try {
    const allCourses = await courseModel.findById(req.params.id) 

    res.status(200).json({
        status:true,
        message:'the course with the given ID . . .',
        data:allCourses,
    })
    } catch (error) {
        return res.status(404).json({
            status: false,
            message:'the course with the given ID was not found',
          error:  error.message
        })
       
    }

})

//UPDATING A COURSE
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const allCourses = await courseModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(allCourses)
    }
    catch (error) {
        res.status(400).json({ 
            status:false,
            message: error.message })
    }
})

//DELETE A COURSE
router.delete('/delete/:id', async (req, res) => {
    try {
        const allCourses = await courseModel.findByIdAndDelete(req.params.id)
        res.send(`the course with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ 
            status:false,
            message: error.message })
    }
})


//UPDATING A COURSE




 






module.exports = router 



