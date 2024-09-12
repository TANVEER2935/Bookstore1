import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Add 'required' if this field must be provided
  },
  price: {
    type: Number,
    required: true, // Add 'required' if this field must be provided
  },
  title: {
    type: String,
    required: true, // Add 'required' if this field must be provided
  },
  category: { // Fixed typo from 'Catageroy' to 'category'
    type: String,
    required: true, // Add 'required' if this field must be provided
  },
  image: {
    type: String,
  },
});

// Define and export the model
const Book = mongoose.model('Book', bookSchema);

export default Book;
