require('dotenv').config();
const request = require('supertest');
// const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.testing);
const server = require('../../api/server');
// const faker = require('faker');

const usersRoutes = require('./usersRoutes');
const authRoutes = require('./authRoutes');

afterEach(async () => {
	await db('users').truncate();
});

describe('User Routes', () => {
	test('should return 200', async () => {
		const userRegister = {
			email: 'test44@test.com',
			password: 'password',
			type: 'user'
		};
		const res1 = await request(server)
			.post('/auth/register')
			.send(userRegister);
		const userLogin = { email: 'test44@test.com', password: 'password' };
		const res = await request(server)
			.post('/auth/login')
			.send(userLogin);
		let token = res.body.token;
		const users = await request(server)
			.get('/users')
			.send(token);
		expect(res.status).toBe(200);
	});
});
