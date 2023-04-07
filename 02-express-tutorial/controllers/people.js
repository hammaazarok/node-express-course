let { people } = require('../data');

exports.getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

exports.createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' });
  }

  res.status(201).json({ success: true, person: name });
};

exports.createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' });
  }

  res.status(201).json({ success: true, data: [...people, { name }] });
};

exports.updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === +id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === +id) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
};

exports.deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === +id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== +id);

  res.status(200).json({ success: true, data: newPeople });
};
