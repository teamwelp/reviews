const express = require('express');
const db = require('../../db/models/review.js');
const helpers = require('../helpers/helpers.js');

const router = express.Router();

router.route('/:businessId')
  .get((req, res) => {
    db.retrieveData('businesses', { businessId: req.params.businessId })
      .then((businessInfo) => {
        res.render('index', { businessId: req.params.businessId, businessName: businessInfo[0].businessName });
      });
  });

router.route('/:businessId/reviews')
  .get((req, res) => {
    db.retrieveData('reviews', { businessId: req.params.businessId }, helpers.getQueryForSort(req.query.sortBy))
      .then(reviews => helpers.addUsersToReviews(reviews, req.query.startAt))
      .then(updatedReviews => res.send(updatedReviews))
      .catch(error => res.status(500).send(error));
  });

router.route('/:businessId/reviews/count')
  .get((req, res) => {
    db.countData('reviews', { businessId: req.params.businessId })
      .then((count) => {
        res.send({ count });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });


module.exports = router;
