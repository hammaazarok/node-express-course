const express = require('express');
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

const router = express.Router();

router.route('/').get(getPeople).post(createPerson);

router.post('/postman', createPersonPostman);

router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
