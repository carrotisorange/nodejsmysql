const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
   res.send('this is create');
});

//read or show
router.get('/:id', (req, res) => {
   res.render('show',
   {
    name:"Juan"
   });
});

//update
router.patch('/:id', (req, res) => {
   res.send('This is update');
});

//delete
router.delete('/:id', (req, res) => {
   res.send('This is delete');
});

module.exports = router;
