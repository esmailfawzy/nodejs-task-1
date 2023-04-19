import DATA from "../data/Students.js";

const studentsController = (req, res, next) => {
  res.render("students", {
    layout: false,
    students: DATA,
  });
};

export default studentsController;
