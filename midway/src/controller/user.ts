import { Controller, Post, Inject, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { Validate } from '@midwayjs/validate';

import { UserModel } from '../model/user.model';
import UserLoginDTO from '../dto/user.dto';
import { JwtService } from '@midwayjs/jwt';

@Controller('/api')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  jwt: JwtService;

  @Inject()
  userModel: UserModel;

  @Post('/user/login')
  @Validate()
  async login(@Body() user: UserLoginDTO): Promise<void> {
    const { ctx } = this;
    const { username, password } = user;
    const result = await this.userModel.getUserByUsernameAndPassword(
      username,
      password
    );
    if (result && result.id) {
      const { username } = result;
      const token = await this.jwt.sign({ username });
      ctx.status = 200;
      ctx.body = {
        code: 200,
        result: 'success',
        message: '登录成功',
        data: {
          token,
        },
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    }
  }
}
