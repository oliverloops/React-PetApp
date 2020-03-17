const express = require('express'),
      path = require('path'),
      app = express();

let port = process.env.PORT || 8080;

// app.use(cors());
app.use(express.static(path.join(__dirname, '/dist')));

app.use((req, res) => {
    res.status(404);
    res.send("ERROR 404 - NOT FOUND");
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist', 'page_3.html'));
    console.log("Server Connected!");
});

app.listen(port, () => console.log(`Running server at port: ${port}`));
