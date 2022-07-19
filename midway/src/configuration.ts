import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import * as orm from '@midwayjs/orm';
import * as jwt from '@midwayjs/jwt';

@Configuration({
  imports: [
    koa,
    validate,
    orm,
    jwt,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    await createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [UserEntity],
      synchronize: true,
      logging: false,
    });
  }
}
