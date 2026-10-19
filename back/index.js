const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../front")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../front/index.html"));
});
app.get('/api/test', (req, res) => {
    res.json({ message: "Connexion Front-Back réussie !" });
});

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connecté !!!");
    } catch (error) {
        console.error("Erreur MongoDB :", error.message);
    }
}
connectDb();

if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`http://localhost:${port}`));
}

module.exports = app;
