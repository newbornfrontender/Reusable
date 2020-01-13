'use strict';

const phonebook = [
  {
    name: 'Alex',
    phone: '+79159000000',
  },
  {
    name: 'Marcus',
    phone: '+17143000000',
  },
  {
    name: 'Fred',
    phone: '+77143111111',
  },
  {
    name: 'Ann',
    phone: '+81253002201',
  },
  {
    name: 'Hayako',
    phone: '+61253033201',
  },
];

const findPhoneByName = name => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
