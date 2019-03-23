const router = require('express').Router();
const db = require('../db/index.js');

router.get('/:state', (req, res, next) => {
  const { state } = req.params;
  db.getStateIdLaws(state, (err, results) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;
