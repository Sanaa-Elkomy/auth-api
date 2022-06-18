import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { UsersModule } from '../src/components/users/users.module';
import { AppModule } from '../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  const randomId = `test-${new Date().getTime()}`;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UsersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`POST /users - Should Create User`, async () => {
    return await request(app.getHttpServer())
      .post('/users')
      .send({
        username: 'test-name',
        email: `${randomId}@gmail.com`,
        password: '@Test5555',
        roles: ['user'],
      })
      .expect(201);
  });

  it(`POST /users - Shouldn't create duplicate users`, async () => {
    return await request(app.getHttpServer())
      .post('/users')
      .send({
        username: 'test-name',
        email: `${randomId}@gmail.com`,
        password: '@Test5555',
        roles: ['user'],
      })
      .expect(400);
  });

  it(`POST /users - Shouldn't Accept Missing Params`, async () => {
    return await request(app.getHttpServer())
      .post('/users')
      .send({
        username: 'new-name',
      })
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
