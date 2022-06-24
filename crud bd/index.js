const express = require('express');
const userRouter = require('./routes/user.routes');


const PORT = 8008;
const app = express();

app.use(express.json());

app.use('/api', userRouter);



app.get('/', (req, res) => {
    res.send("Hello ;)");

});





app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
