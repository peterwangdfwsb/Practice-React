const express = require('express');
const app = express();

const PORT = 4000;

const DATA_FROM_DB = [
  "San Jose",
  "San Francisco",
  "San Diego",
  "Los Angelos",
  "New York",
];

app.get("/api/city", (req, res) => {
  try {
    const { searchTerm } = req.query; // "san"
    let filteredResult = [];
    // sanity check
    if (searchTerm) {
      filteredResult = DATA_FROM_DB.filter((data) => new RegExp(searchTerm, "i").test(data));
    }
  
    res.status(200).json({ filteredResult });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong.", e });
  }
})



app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});
