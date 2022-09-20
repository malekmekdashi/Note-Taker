const express = require('express');

const path = require('path');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiRoutes);


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/notes.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/index.html'));
});

app.listen(PORT, () => {
    console.log(`APP listening at http://localhost:${PORT}`);
});