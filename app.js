const express = require('express');
const app = express();
const PORT = 3000 || 8000;
// const num1 = Math.floor(Math.random() * 10000);


app.use(express.json());
app.use((req, res, next) => {
    console.log(`Request Recieved: ${req.method}, ${req.url}`);
    next();
});


app.get('/user/:id', (req, res) => {

    const userId = req.params.id; //dot notation
    res.send(`User ID is ${userId}`);

});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query is ${query}`);
});

app.listen(PORT, () => {

    console.log(`Server started on port ${PORT}`);

});