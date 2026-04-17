const express = require('express');
const router = express.Router();

const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

// GET /api/ideas
router.get('/', (req, res) => {
    const ideas = getAllFromDatabase('ideas');
    res.status(200).send(ideas);
});

// POST /api/ideas
router.post('/', checkMillionDollarIdea, (req, res) => {
    const createdIdea = addToDatabase('ideas', req.body);
    res.status(201).send(createdIdea);
});

// GET /api/ideas/:ideaId
router.get('/:ideaId', (req, res) => {
    const ideaId = req.params.ideaId;
    const ideaById = getFromDatabaseById('ideas', ideaId);

    if (!ideaById) {
        return res.status(404).send();
    }    

    res.status(200).send(ideaById);
});

// PUT /api/ideas/:ideaId
router.put('/:ideaId', (req, res, next) => {
    const idea = getFromDatabaseById('ideas', req.params.ideaId);

    if (!idea ) {
        return res.status(404).send();
    }

    req.body.id = req.params.ideaId;
    next();
}, checkMillionDollarIdea, (req, res) => {
    const result = updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(result);
});

// DELETE /api/ideas/:ideaId
router.delete('/:ideaId', (req, res) => {
    const ideaId = req.params.ideaId;
    const isDeleted = deleteFromDatabasebyId('ideas', ideaId);

    if (!isDeleted) {
        return res.status(404).send();
    }

    return res.status(204).send();
})

module.exports = router;