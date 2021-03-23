const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')

class MeController {

    // [GET] /me/course/stored
    show(req, res, next) {
        
        Course.find()
            .then(courses => res.render('meCourse',{courses : mongooseToObject(courses)}))
            .catch(next)
    }

    // [GET] /me/course/update
    updateShow(req, res, next) {
        
        Course.findOne({_id : req.params.id})
            .then(course => res.render('meCourseUpdate',{course : mongooseToObject(course)}))
            .catch(next)
    }

    // [PUT] /me/course/:id
    updateCourse(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
        Course.findOneAndUpdate({_id : req.params.id},req.body)
            .then(() => res.redirect('/me/course/stored'))
            .catch(next)
    }
    // [DELETE] /me/course/:id
    delete(req, res, next) {
        Course.deleteOne({_id : req.params.id})
            .then(() => res.redirect('/me/course/stored'))
            .catch()
    }
    
}

module.exports = new MeController();
