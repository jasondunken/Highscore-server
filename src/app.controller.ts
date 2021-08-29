import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() request) {
    return this.authService.login(request.user);
  }
  
  @Get()
  async home() {
    return `<html>
              <head>
                <title>BitByteBytes</title>
              </head>
              <body style="height: 100vh; display: grid; place-items: center;">
                <div>BitByteBytes</div>
              </body>
            <html>`;
  }
}
