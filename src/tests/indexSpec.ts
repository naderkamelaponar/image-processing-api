// بسم الله الرحمن الرحيم
import supertest from 'supertest';
import app from '../index';

describe('check the landing api GET/', function () {
   it('response type toBe text/html and response state toEqual 200', async function () {
      const response = await supertest(app).get('/');
      expect(response.type).toBe('text/html');
      expect(response.status).toEqual(200);
   });
});
