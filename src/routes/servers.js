const express = require('express');
const router = express.Router();
const newServerController = require('../controllers/newServerController');
const newServerHandler = require('../handlers/newServerHandler');
const newChannelController = require('../controllers/newChannelController');
const newChannelHandler = require('../handlers/newChannelHandler');
const mainPageVisitHandler = require('../handlers/mainPageVisitHandler');
const userJoinHandler = require('../handlers/userJoinHandler');

router.post('/new-server', async (req, res) => {
  const error = await newServerController(req, res);
  if (error) return res.status(400).send(error);
  await newServerHandler(req, res);
});

router.post('/new-channel', async (req, res) => {
  const error = await newChannelController(req, res);
  if (error) return res.status(400).send(error);
  await newChannelHandler(req, res);
});

router.get('/public', (req, res) => {
  mainPageVisitHandler(req, res);
});

router.get('/join', (req, res) => {
  userJoinHandler(req, res);
});

module.exports = router;
