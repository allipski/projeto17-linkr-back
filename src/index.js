import './setup.js'
import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.get('/status', (req,res) => {
    res.send('ok novo');
})

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}!`));