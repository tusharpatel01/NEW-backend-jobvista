// import { app } from "./src/app.js";
// import connectDB from "./src/DB/indexDB.js";
// import dotenv from "dotenv";
// dotenv.config();
// const PORT = process.env.PORT || 5000;

// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error starting server:", error.message);
//   });

//   app.get("/", (req, res) => {
//     res.send("Server is running");
//   }
//     );
import dotenv from "dotenv";
dotenv.config();

import { app } from "./src/app.js";
import connectDB from "./src/DB/indexDB.js";

// Connect DB once (cached by Vercel)
connectDB();

export default app;
