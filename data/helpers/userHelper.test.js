const request = require('supertest');
require('dotenv').config();
const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.testing);

const userHelper = require('./userHelper');

describe.skip('Get All Users', () => {
	test('should return an object', async () => {
		const res = await userHelper.getAllUsers();
		expect(res.type).toEqual('application/json');
	});
	test('should return status 200', async () => {
		const res = await userHelper.getAllUsers();
		expect(res.status).toBe(200);
	});
});
