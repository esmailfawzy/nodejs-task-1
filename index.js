import express from "express";
import { engine } from "express-handlebars";
import studentsRouter from "./routes/students.js";

const app = express();
const PORT = 3000;
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/students", studentsRouter);

app.get("/", (req, res) => {
  res.redirect("/students");
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
