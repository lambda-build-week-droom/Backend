const { list } = require('../utils/')
exports.seed = function(knex, Promise) {
    return knex('users')
        .truncate()
        .then(function() {
            // Inserts seed entries
            // list generates 25 fake users
            return knex('users').insert(list);
        });
};