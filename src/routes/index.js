const newsRouter = require('./news')
const courseRouter = require('./courses/course')
const meRouter = require('./me')
const siteRouter = require('./site')

function route(app) {
    app.use('/news', newsRouter)
    app.use('/courses', courseRouter)
    app.use('/me', meRouter)
    app.use('/paging', siteRouter)
    app.use('/', siteRouter)
}

module.exports = route
