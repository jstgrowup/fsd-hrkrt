const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const createdAdmin = await Admin.create({ username, password });
  if (createdAdmin) {
    res.status(200).json({ message: "Admin created successfully" });
  }
  return res.status(400).json({
    message: "Sorry there is something wrong while creating the admin",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  const createdCourse = await Course({ title, description, price, imageLink });
  if (createdCourse) {
    return res.status(200).json({ message: "Course created successfully" });
  }
  return res.status(400).json({
    message: "Sorry there is something wrong while creating the course",
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const allCourses = await Course.find();

    return res.status(200).json({ courses: allCourses });
  } catch (error) {
    console.log("error:", error);
  }
});

module.exports = router;
