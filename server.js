const express = require('express');
const path = require('path');
// const cors = require('cors');
const app = express();
let port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist', 'page_3.html'));
    console.log("Server Connected!");
});

app.listen(port, () => console.log(`Running server at port: ${port}`));