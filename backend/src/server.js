import app from "./app.js";
import { connectDB } from "./config/db.js";
import "dotenv/config";

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

connectDB(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
