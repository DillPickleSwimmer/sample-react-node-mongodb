const router = require('express').Router();

router.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

module.exports = router;
