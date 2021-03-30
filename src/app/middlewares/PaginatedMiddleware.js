// http://localhost:3000/paging/test?page=2&limit=2
function PaginatedResutls(model){
    return (req, res, next) =>{
        const page = parseInt(req.query.page)
        const limit =parseInt(req.query.limit)
        
        const startIndex = (page - 1) * limit
        const endIndex = page*limit
        const results = {}

        Promise.all([ model.countDocuments(),model.find().skip(startIndex).limit(limit)])
            .then( ([total,data]) => {
                startIndex > 0 ? results.next ={page:page+1,limit} : undefined
                endIndex < total ? results.previous ={page:page-1,limit}: undefined
                results.total = {total}
                results.results = data
                req.paginatedResutls = results
                next()
            })
            .catch(err => res.status(500).json({message: err.message}))
        
    }
}

module.exports = PaginatedResutls