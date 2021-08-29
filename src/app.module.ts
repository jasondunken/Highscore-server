import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(), 
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
