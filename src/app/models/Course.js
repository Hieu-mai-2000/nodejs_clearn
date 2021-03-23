const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoID: { type: String },
    slug: { type: String, slug: 'name', unique: true  }
  },{
      timestamps : true,
  })

// solf delete
const mongoose_delete = require('mongoose-delete')
Course.plugin(mongoose_delete, { 
    deletedAt : true,
    overrideMethods: 'all',
})



  module.exports = mongoose.model('Course', Course)