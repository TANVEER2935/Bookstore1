import mongoose from 'mongoose';

const courseschema=mongoose.Schema({
        sub_code: String,
        name: String,
        price: Number,
        img: String,
        description: String
})

const Course=mongoose.model("course",courseschema);

export default Course;