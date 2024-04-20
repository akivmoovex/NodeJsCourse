const express = require ('express')
const studentRoutes = require('./student/routes')
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res)=> {
    res.send("Hello World2!");
});

app.use('/api/v1/students', studentRoutes);

app.listen(port, ()=> console.log('app listening on port ${port}'));



