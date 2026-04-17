const express = require('express');
const router = express.Router();

const { getAllFromDatabase, deleteAllFromDatabase, createMeeting, addToDatabase } = require('./db');

// GET /api/meetings
router.get('/', (req, res) => {
    const meetings = getAllFromDatabase('meetings');
    res.status(200).send(meetings);
})

// POST /api/meetings
router.post('/', (req, res) => {
    const newMeeting = createMeeting();
    const createdMeeting = addToDatabase('meetings', newMeeting);
    res.status(201).send(createdMeeting);
});

// DELETE /api/meetings
router.delete('/', (req, res) => {
    deleteAllFromDatabase('meetings');
    return res.status(204).send();
})

module.exports = router;