import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.post("/buy-ticket", (req, res) => {
    console.log(req.body);
    res.json({ status: "success" });
});

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.json({ status: "success" });
});

app.listen(port, () => {
    console.log("Server was started");
});