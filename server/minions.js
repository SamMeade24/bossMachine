const express = require('express');
const router = express.Router();
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');

// GET /api/minions
router.get('/', (req, res) => {
    const minions = getAllFromDatabase('minions');
    res.status(200).send(minions);
});

// POST /api/minions
router.post('/', (req, res) => {
    const newMinion = req.body;

    if (!newMinion) {
        return res.status(400).send();
    }

    const createdMinion = addToDatabase('minions', newMinion);
    res.status(201).send(createdMinion);
})

// GET /api/minions/:minionId
router.get('/:minionId', (req, res) => {
    const minionId = req.params.minionId;
    const minionById = getFromDatabaseById('minions', minionId);

    if (!minionById) {
        return res.status(404).send();
    }    

    res.status(200).send(minionById);
});

// PUT /api/minions/:minionId
router.put('/:minionId', (req, res) => {
    const minionId = req.params.minionId;
    const updatedMinion = req.body;

    if (updatedMinion.id !== minionId) {
        return res.status(404).send();
    }

    const result = updateInstanceInDatabase('minions', updatedMinion);

    if (!result) {
        return res.status(404).send();
    }

    res.status(200).send(result);
});

// DELETE /api/minions/:minionId
router.delete('/:minionId', (req, res) => {
    const minionId = req.params.minionId;
    const isDeleted = deleteFromDatabasebyId('minions', minionId);

    if (!isDeleted) {
        return res.status(404).send();
    }

    return res.status(204).send();
});

module.exports = router;
