const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')

class MeController {

    // [GET] /me/course/stored
    show(req, res, next) {
        let Courses = Course.find()
        if(req.query.hasOwnProperty('_sort')){
            Courses = Courses.sort({
                [req.query.column] : res.locals._sort.type
            })
        }

        Promise.all([ Course.countDocumentsDeleted() , Courses ])
            .then( ([countDelete,courses]) => res.render('meCourse',{ countDelete,courses : mongooseToObject(courses)}))
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
        Course.delete({_id : req.params.id})
            .then( () => res.redirect('/me/course/stored'))
            .catch()
    }

    // [GET] /me/trash/course
    trashShow(req, res, next) {
        Course.findDeleted()
            .then(courses => res.render('meTrashCourse',{courses : mongooseToObject(courses)}))
            .catch(next)
    }

    // [PATCH] /me/trash/:id
    restoreCourse(req, res, next) {
        Course.restore({_id: req.params.id})
            .then( () => res.redirect('/me/trash/course'))
            .catch(next)

    }

    // [DELETE] /me/course/force/:id
    deleteForce(req, res, next) {
        
        Course.deleteOne({_id: req.params.id})
            .then( () => res.redirect('back'))
            .catch(next)

    }
    
}

module.exports = new MeController();
