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
  results: [
    {
      start: 1740787200000,
      end: 1743465600000,
      amount: 73182037785,
    },
    {
      start: 1738368000000,
      end: 1740787200000,
      amount: 47514202557,
    },
    {
      start: 1735689600000,
      end: 1738368000000,
      amount: 20805559514,
    },
    {
      start: 1733011200000,
      end: 1735689600000,
      amount: 96062992789,
    },
    {
      start: 1730419200000,
      end: 1733011200000,
      amount: 269434392254,
    },
    {
      start: 1727740800000,
      end: 1730419200000,
      amount: 142582617422,
    },
    {
      start: 1725148800000,
      end: 1727740800000,
      amount: 201539369134,
    },
    {
      start: 1722470400000,
      end: 1725148800000,
      amount: 168443830667,
    },
    {
      start: 1719792000000,
      end: 1722470400000,
      amount: 323900885904,
    },
    {
      start: 1717200000000,
      end: 1719792000000,
      amount: 60927734838,
    },
    {
      start: 1714521600000,
      end: 1717200000000,
      amount: 83415392312,
    },
    {
      start: 1711929600000,
      end: 1714521600000,
      amount: 134696141350,
    },
  ],
  metadata: {
    count: 12,
    range: "monthly",
    allTimeRevenue: 3997065161295,
  },
};

app.get("/api/revenue", (req, res) => {
  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
