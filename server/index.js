import dotenv from "dotenv";
import ConnectDB from "./db/connectDB.js";
import app from "./app.js";

dotenv.config();

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGODB Connection Failed ${err}`);
  });
