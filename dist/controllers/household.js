"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Household = require('../models/household.schema');
exports.createHousehold = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({
            message: 'Request body empty. Ensure data is submitted in JSON format.'
        });
        return;
    }
    const householdObj = {
        householdType: req.body.householdType,
        street: req.body.street,
        unit: req.body.unit,
        postal: req.body.postal
    };
    const household = new Household(householdObj);
    household.save()
        .then((result) => {
        res.status(201).json({
            message: 'Household added successfully',
            householdId: result._id
        });
    })
        .catch((err) => {
        console.log(err);
    });
};
