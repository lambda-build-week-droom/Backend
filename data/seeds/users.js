// makes a list of 20 users from utils
const { list } = require('../../utils/')

exports.seed = function(knex, Promise) {
    return knex('users')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert(list);
        });
};