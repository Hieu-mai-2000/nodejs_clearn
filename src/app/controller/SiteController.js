const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')
const jwt = require('jsonwebtoken')
const Keys = require('../../keysAuthorization/key') 


class SiteController {
    // [GET] /
    main(req, res, next) {
        Course.find()
            .then(courses => {
                res.render('home',{courses:mongooseToObject(courses)})
            })
            .catch(next)
    }

    // [GET] /news
    index(req, res, next) {
        res.send('news');
    }

    // [GET] /paging/test
    test(req, res, next) {
        // res.send(req.cookie)
        console.log(!req.cookies.name)
        // const pass = jwt.verify(req.cookies.name,'mk')
        // console.log(pass)
        res.json(req.paginatedResutls)
    }

    // [GET] /login
    loginShow(req, res, next){
        res.render('login');
    }

    // [POST] /login
    login(req, res, next){

        Course.findOne({name:req.body.name})
            .then(data => {
                if(data == null){
                    // alert("Hello! I am an alert box!!");
                    return res.redirect('back')
                }
                const id = data._id
                const mark = jwt.sign({id},Keys.private)
                res.cookie('name',mark)
                res.send('ban da dang nhap thanh cong')
            })
            .catch(err => res.status(500).json({message:err.message}))
    }

    // [GET] /student
    student(req, res, next){
        res.send('student');
    }
    // [GET] /teacher
    teacher(req, res, next){
        res.send('teacher');
    }// [GET] /admin
    admin(req, res, next){
        res.send('admin');
    }
}

module.exports = new SiteController();
