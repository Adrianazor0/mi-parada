import express from 'express';
import { testHandler } from './middlewares/testHandler.ts';
import { NotFoundHandler } from './middlewares/notFoundHandler.ts';

const app = express();

app.use(testHandler)

app.get("/", (req, res) => {
    res.json({message: "api working"}) 
});

app.use(NotFoundHandler);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

