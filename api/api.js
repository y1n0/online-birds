import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/images", (req, res) => {
  res.json({
    images: [
      { id: 1, url: "http://localhost:3000/images/image1.webp" },
      { id: 2, url: "http://localhost:3000/images/image2.webp" },
      { id: 3, url: "http://localhost:3000/images/image3.webp" },
      { id: 4, url: "http://localhost:3000/images/image4.webp" },
    ],
    count: 4
  });
});

app.use('/images', express.static("public/slider-images"));

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
