const request = require('supertest');
require('dotenv').config();
const server = require('./server');
// const express = require('express');
// const knex = require('knex');
// const knexConfig = require('../knexfile');
// const db = knex(knexConfig.testing);

// const server = express();

afterEach(async () => {
	// await db('users').truncate();
});

describe('server.js', () => {
	test('should set testing enviornment', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});
});

describe('GET', () => {
	test('should return status 200', async () => {
		const res = await request(server).get('/');
		expect(res.status).toBe(200);
	});

	test('should return JSON', async () => {
		const res = await request(server).get('/');
		expect(res.type).toBe('application/json');
	});
	test('should return { "Sanity Check" }', async () => {
		const res = await request(server).get('/');
		expect(res.body).toBe('Sanity Check');
	});
});
