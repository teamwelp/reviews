const express = require('express');
const db = require('../../db/models/review.js');
const helpers = require('../helpers/helpers.js');

const router = express.Router();

router.route('/:businessId/reviews')
  .get((req, res) => {
    db.retrieveData('reviews', { businessId: req.params.businessId })
      .then(helpers.addUsersToReviews)
      .then((updatedReviews) => {
        res.send(updatedReviews);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

module.exports = router;
