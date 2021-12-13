import express from "express";
import placesRoutes from "./routes/places.js";

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());

app.use("/api/places",placesRoutes);

app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`));
