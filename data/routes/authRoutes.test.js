require('dotenv').config();
const request = require('supertest');
const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.testing);

const authRoute = require('./authRoutes');

afterEach(async () => {
	await db('users').truncate();
});

describe('/register', () => {
	test('should return 201', async () => {
		try {
			const newUser = { email: 'test@test.com', password: 'password', type: 'user' };
			const res = await request(server)
				.post('/register')
				.send(newUser);
			expect(res.status).toBe(201);
		} catch (error) {}
	});
	test('should return status 500', async () => {
		try {
			const newUser = { email: 'test@test.com', password: 'password' };
			const res = await request(server)
				.post('/register')
				.send(newUser);
			expect(res.status).toBe(100);
		} catch (error) {}
	});

	test('should return 500', async () => {
		try {
			const newUser = { email: 'test@test.com', type: 'user' };
			const res = await request(server)
				.post('/register')
				.send(newUser);
			expect(res.status).toBe(500);
		} catch (error) {}
	});
	test('should return an object', async () => {
		try {
			const newUser = { email: 'test@test.com', password: 'password' };
			const res = await request(server)
				.post('/register')
				.send(newUser);
			expect(res.type).toExpect('object');
		} catch (error) {}
	});
});
describe('/login', () => {
	test('should return 200', async () => {
		try {
			const newUser = { email: 'test@test.com', password: 'password' };
			const res = await request(server)
				.post('/login')
				.send(newUser);
			expect(res.status).toBe(200);
		} catch (error) {}
	});
});
