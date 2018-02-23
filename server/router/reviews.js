const express = require('express');
const db = require('../../db/models/db.js');
const helpers = require('../helpers/helpers.js');

const router = express.Router();

router.route('/:businessId/reviews')
  .get((req, res) => {
    const promise = db.retrieveData('reviews', { businessId: req.params.businessId }).then(helpers.addUsersToReviews);
    promise.then(updatedReviews => res.send(updatedReviews));
  });

module.exports = router;
