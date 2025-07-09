import express from "express";
import cors from "cors";
import Router from "./routes/dogs_routes";

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json()); // преобразуем json-тело запроса в javascript

app.use("/api/dogs", Router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
