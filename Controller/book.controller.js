import Book from "../Model/book.model.js";

// Define and export the getbook function
const getbook = async (req, res) => {
  try {
    const books = await Book.find(); // Use 'books' to store the result
    res.status(200).json(books);     // Return the books array in the response
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message }); // Provide a more descriptive error message
  }
};

export default getbook;
