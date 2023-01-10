const mongoose=require('mongoose')
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide a name"],
        trim: true,
        maxlength: [20, "Pls enter a name less than 20 characters long"]
    }, 
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)