import Course from "../model/course.model.js";

// Define and export the getbook function
const getcourse = async (req, res) => {
  try {
    const courses = await Course.find(); // Use 'books' to store the result
    res.status(200).json(courses);     // Return the books array in the response
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message }); // Provide a more descriptive error message
  }
};

export default getcourse;