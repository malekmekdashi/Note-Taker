const fs = require('fs');
const db = require('../../Develop/db/db.json')
const router = require('express').Router();

const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    fs.readFile(db).then((data) => res.json(JSON.parse(data)))
});
    
router.post('/api/notes', (req, res) => {
    const updatedNote = {
        id: uuidv4(),
        title: req.body.type,
        text: req.body.text
    };

    fs.readFile(db, (err, data) => {
       if (err) throw err;
    
       const newData = JSON.parse(data);
       newData.push(updatedNote);
       console.log(newData);

       fs.writeFile(db, JSON.stringify(newData), (err) => { if (err) throw err; res.send('success');
       });

    });
});

module.exports = router;