const express = require('express');

const router = express.Router();

router.get('/:username', (req, res) => {
  const { username } = req.params;
  const role = req.query.role || 'Guest';
  res.send(`Welcome ${username}, your role is ${role}`);
});

module.exports = router;
