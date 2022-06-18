import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './components/users/users.module';
import { config } from './config';
import { AuthModule } from './components/auth/auth.module';
import { Module } from '@nestjs/common';
import { SessionModule } from './components/sessions/session.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongo_uri),
    UsersModule,
    AuthModule,
    SessionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
