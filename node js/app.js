const express = require('express');
const app = express();
const PORT = 8080; 

app.get('/', (req, res) => {
    res.send('<h1>Hello Welcome To Home Page.</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});