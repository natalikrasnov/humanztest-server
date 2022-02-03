const {BadRequest} = require("@feathersjs/errors");
const { isIDCardValid } = require("../../utils/doValidation");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      function (context) {
        if(!context.data.ID || !isIDCardValid(context.data.ID)) return new BadRequest("invalid ID card")
        return context;
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
