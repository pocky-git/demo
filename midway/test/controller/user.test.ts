import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';
// import * as assert from 'assert';

describe('test/controller/user.test.ts', () => {

  let app: Application;

  beforeAll(async () => {
    try {
      app = await createApp<Framework>();
    } catch (err) {
      console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    await close(app);
  });

  it('should POST /api/user/login', async () => {
    jest.setTimeout(1000);
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .send({ username: 'jack', password: 'redballoon' })

    expect(result.status).toBe(200)
    expect(result.body.data).toEqual(
      expect.objectContaining({
        token: expect.any(String)
      })
    )
  });
});
