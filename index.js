import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Testing if server works...")
})

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

