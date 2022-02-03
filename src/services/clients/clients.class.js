const { Service } = require('feathers-knex');

exports.Clients = class Clients extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'clients'
    });
  }
};
