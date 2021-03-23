const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')

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
}

module.exports = new SiteController();
