const knex = require('knex');
const config = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);

// https://droom-backend.herokuapp.com/

// Authentication

// [POST] https://droom-backend.herokuapp.com/auth/register
// [POST] https://droom-backend.herokuapp.com/auth/login

// Users

// [GET] https://droom-backend.herokuapp.com/users/
// [GET] https://droom-backend.herokuapp.com/users/info
// [PUT] https://droom-backend.herokuapp.com/users/update
// [DELETE] https://droom-backend.herokuapp.com/users/delete
// [GET] https://droom-backend.herokuapp.com/users/matched
// [GET] https://droom-backend.herokuapp.com/users/:id
// [POST] https://droom-backend.herokuapp.com/users/:id/save
// [POST] https://droom-backend.herokuapp.com/users/:id/remove

// Companies

// [GET] https://droom-backend.herokuapp.com/companies/
// [GET] https://droom-backend.herokuapp.com/companies/info
// [GET] https://droom-backend.herokuapp.com/companies/:id
// [PUT] https://droom-backend.herokuapp.com/companies/update
// [DELETE] https://droom-backend.herokuapp.com/companies/delete

//Jobs

// [GET] https://droom-backend.herokuapp.com/jobs/
// [POST] https://droom-backend.herokuapp.com/jobs/
// [GET] https://droom-backend.herokuapp.com/jobs/info
// [GET] https://droom-backend.herokuapp.com/jobs/:id
// [PUT] https://droom-backend.herokuapp.com/jobs/:id/update
// [DELETE] https://droom-backend.herokuapp.com/jobs/:id/delete
// [POST] https://droom-backend.herokuapp.com/jobs/:id/save
// [POST] https://droom-backend.herokuapp.com/jobs/:id/remove
