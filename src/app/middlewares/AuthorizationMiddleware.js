const jwt = require('jsonwebtoken')
const Keys = require('../../keysAuthorization/key') 

function authorization(model,...option){
    return (req, res, next)=>{
        !req.cookies.name ? res.json('phien dang nhap da het han') : undefined
        try {
            
            const member = jwt.verify(req.cookies.name,Keys.private)
            model.findOne({_id:member.id})
            .then(data => {
                const isAuthorization = Array.from(option).includes(data.name)
                isAuthorization ? next(): res.json('ban khong du quyen truy cap')
            })
            .catch(error => res.status(500).json({mesage: error.message}))
        } catch (error) {
            res.send(error.message)
        }
        
      
    }
}

module.exports = authorization

 // try {
        //     const data = await model.findOne({_id:member.id})
        //     const isAuthorization = Array.from(option).includes(data.name)
        //     isAuthorization ? next(): res.json('ban khong du quyen truy cap')
        // } catch (error) {
        //     res.send(error.message)
        // }