const express = require('express');
const Event = require('../models/event');
const router = express.Router();

router.post('/', (req, res) => {
  const newEvent = new Event(req.body);
  newEvent.save()
    .then(event => res.status(201).json(event))
    .catch(err => res.status(400).json({ message: err.message }));
});

router.get('/', (req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;