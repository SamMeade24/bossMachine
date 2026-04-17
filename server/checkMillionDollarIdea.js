const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = Number(req.body.numWeeks);
    const weeklyRevenue = Number(req.body.weeklyRevenue);

    const total = numWeeks * weeklyRevenue;

    // Validates inputs and ensures the idea is worth at least $1,000,000
    if (isNaN(numWeeks) || isNaN(weeklyRevenue) || total < 1000000) {
        return res.status(400).send();
    }

    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
