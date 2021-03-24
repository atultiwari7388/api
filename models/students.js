const mongoose = require('mongoose')
const validator = require('validator')

//! Define schema 
const studentSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 5
   },
   email: {
      type: String,
      required: true,
      // unique: [true, 'Email id all ready present'],
      validate(value) {
         if (validator.isEmail(value)) {
            throw new Error('Invalid Email')
         }
      }
   },

   phone:{
      type:Number,
      require:true,
      min:10,
      // unique:true,
   },

   address:{
      type:String,
      required:true,
   }
})

//! Define Models 
//? We wil Create a new collection

const Student = new mongoose.model('Student' , studentSchema)

module.exports = Student