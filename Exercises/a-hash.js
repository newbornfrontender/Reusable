'use strict';

const phonebook = {
  Alex: '+79159000000',
  Marcus: '+17143000000',
  Fred: '+77143111111',
  Ann: '+81253002201',
  Hayako: '+61253033201',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
