require('dotenv').config();
const request = require('supertest');
const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.testing);
const server = require('../../api/server');
const faker = require('faker');

const authRoute = require('./authRoutes');

afterEach(async () => {
	await db('users').truncate();
});

describe('/register', () => {
	test('should return 201', async () => {
		const newUser = { email: faker.internet.email(), password: 'password', type: 'user' };
		const res = await request(server)
			.post('/auth/register')
			.send(newUser);
		expect(res.status).toBe(201);
	});

	test('should return status 500', async () => {
		const newUser = { email: faker.internet.email(), password: 'password' };
		const res = await request(server)
			.post('/auth/register')
			.send(newUser);
		expect(res.status).toBe(500);
	});

	test('should return 500', async () => {
		const newUser = { email: faker.internet.email(), type: 'user' };
		const res = await request(server)
			.post('/register')
			.send(newUser);
		expect(res.status).toBe(404);
	});
	test('should return json', async () => {
		const newUser = { email: faker.internet.email(), password: 'password', type: 'user' };
		const res = await request(server)
			.post('/auth/register')
			.send(newUser);
		expect(res.type).toBe('application/json');
	});
});
describe('/login', () => {
	test('should return 200', async () => {
		const userRegister = { email: 'test5@test.com', password: 'password', type: 'user' };
		const res1 = await request(server)
			.post('/auth/register')
			.send(userRegister);
		const userLogin = { email: 'test5@test.com', password: 'password' };
		const res = await request(server)
			.post('/auth/login')
			.send(userLogin);
		expect(res.status).toBe(200);
	});
	test('should return 404', async () => {
		const userRegister = { email: 'test5@test.com', password: 'password', type: 'user' };
		const res1 = await request(server)
			.post('/auth/register')
			.send(userRegister);
		const userLogin = { email: '6@test.com', password: 'password' };
		const res = await request(server)
			.post('/auth/login')
			.send(userLogin);
		expect(res.status).toBe(404);
	});
});
