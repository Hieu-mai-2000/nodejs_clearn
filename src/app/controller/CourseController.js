const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        
        Course.findOne({slug : req.params.slug})
            .then(course => {
                res.render('course',{course:mongooseToObject(course)})
            })
            .catch(next)
    }

    // [GET] /course/create
    create(req, res, next) {
        res.render('create')

    }
    // [POST] /course
    createPost(req, res, next) {
        req.body.image = 'https://img.youtube.com/vi/' + req.body.videoID + '/sddefault.jpg'
        const model = new Course(req.body)
        model.save()
        
        res.send('Course saved')
    }

    
}

module.exports = new CourseController();
