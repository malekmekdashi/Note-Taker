const fs = require('fs');
const db = './db/db.json';
const router = require('express').Router();

const { v4: uuidv4 } = require('uuid');

let parsedData;
let newData;

router.get('/api/notes', (req, res) => {
    

    fs.readFile(db, (err, data) => {
        if (err) throw err;
        
        parsedData = JSON.parse(data);
              
    });
    return res.json(parsedData); 
});
    
router.post('/api/notes', (req, res) => {
    const updatedNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };

    fs.readFile(db, (err, data) => {
       if (err) throw err;
    
       newData = JSON.parse(data);
       newData.push(updatedNote);
    fs.writeFile(db, JSON.stringify(newData), (err) => { if (err) throw err;   
    });
    
    });
});

console.log('readFile called');

module.exports = router;