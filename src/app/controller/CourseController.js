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
            .then( () => res.redirect('/me/course/stored'))
            .catch(next)
    }

    // [POST] /course/deleteCheckBox
    deleteCheckBox(req, res, next){
        switch(req.body.action){
            case 'delete':
                Course.delete({_id : {$in: req.body.courseIds} })
                    .then(course => res.redirect('back'))
                    .catch(next)
                break;
            
            default:
                res.json({message : "action invalid"})
        }
    }

    //[POST] /courses/trash/handles
    handles(req, res, next){
        switch(req.body.action){
            case 'restore':
                Course.restore({_id : {$in : req.body.courseIds}})
                    .then(course => res.redirect('back'))
                    .catch(next)
                break
            case 'deleteFore':
                Course.deleteMany({_id : {$in : req.body.courseIds}})
                    .then(course => res.redirect('back'))
                    .catch(next)
                break

            default:
                res.json({message : "action invalid"})
        }
    }
    
}

module.exports = new CourseController();
