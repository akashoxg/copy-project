const express = require('express');
const { createLead, getLeads } = require('../controllers/leadController');

const router = express.Router();

router.route('/')
  .post(createLead)
  .get(getLeads);

module.exports = router;
