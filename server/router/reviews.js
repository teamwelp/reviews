const express = require('express');
const db = require('../../db/models/db.js');

const router = express.Router();

router.route('/:businessId/reviews')
  .get((req, res) => {
    db.retrieveData('reviews', { businessId: req.params.businessId }).then((data) => {
      res.json(data);
    });
  });

module.exports = router;
