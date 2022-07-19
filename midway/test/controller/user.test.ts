import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';
// import * as assert from 'assert';

describe('test/controller/user.test.ts', () => {

  let app: Application;

  beforeAll(async () => {
    try {
      app = await createApp<Framework>();
    } catch(err) {
        console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    await close(app);
  });

  it('should POST /api/user/login', async () => {
    // make request
    const result = await createHttpRequest(app)
      .post('/api/user/login')
  });
});
