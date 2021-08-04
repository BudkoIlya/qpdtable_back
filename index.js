import express from "express";
import userRouter from "./routes/user.routes";

const PORT = process.env.PORT || 6002;

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/table", userRouter);

app.listen(PORT, () => console.log(`Server started ${PORT}`));
