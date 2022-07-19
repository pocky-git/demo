import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1658148353103_4833',
  koa: {
    port: 7001,
  },
  jwt: {
    secret: 'zqm',
    expiresIn: '2d'
  }
} as MidwayConfig;
