class NewsController {
    main(req, res, next) {
        res.send('bạn đang ở trang chủ');
    }

    // [GET] /news
    index(req, res, next) {
        res.send('news');
    }
}

module.exports = new NewsController();
