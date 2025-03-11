const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const mockData = {
  monthlyStats: [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 59 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 81 },
    { month: "May", value: 56 },
    { month: "Jun", value: 55 },
  ],
};

app.get("/api/stats", (req, res) => {
  res.json(mockData.monthlyStats);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
