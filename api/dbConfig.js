const knex = require('knex');
const config = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);

// https://droom-backend.herokuapp.com/

// Authentication

// [POST] https://droom-backend.herokuapp.com/auth/register
// [POST] https://droom-backend.herokuapp.com/auth/login

// Users

// [x] [GET] https://droom-backend.herokuapp.com/users/
// [x] [GET] https://droom-backend.herokuapp.com/users/info
// [x] [PUT] https://droom-backend.herokuapp.com/users/update
// [] [DELETE] https://droom-backend.herokuapp.com/users/delete
// [] [GET] https://droom-backend.herokuapp.com/users/matched
// [x] [GET] https://droom-backend.herokuapp.com/users/:id
// [] [POST] https://droom-backend.herokuapp.com/users/:id/save
// [] [POST] https://droom-backend.herokuapp.com/users/:id/remove

// Companies

// [x] [GET] https://droom-backend.herokuapp.com/companies/
// [x] [GET] https://droom-backend.herokuapp.com/companies/info
// [x] [GET] https://droom-backend.herokuapp.com/companies/:id
// [x] [PUT] https://droom-backend.herokuapp.com/companies/update
// [] [DELETE] https://droom-backend.herokuapp.com/companies/delete

//Jobs

// [x] [GET] https://droom-backend.herokuapp.com/jobs/
// [x] [POST] https://droom-backend.herokuapp.com/jobs/
// [x] [GET] https://droom-backend.herokuapp.com/jobs/info
// [] [GET] https://droom-backend.herokuapp.com/jobs/:id
// [] [PUT] https://droom-backend.herokuapp.com/jobs/:id/update
// [] [DELETE] https://droom-backend.herokuapp.com/jobs/:id/delete
// [] [POST] https://droom-backend.herokuapp.com/jobs/:id/save
// [] [POST] https://droom-backend.herokuapp.com/jobs/:id/remove
