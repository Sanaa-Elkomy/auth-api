import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './components/users/users.module';
import { config } from './config';
import { AuthModule } from './components/auth/auth.module';
import { Module } from '@nestjs/common';
import { SessionModule } from './components/sessions/session.module';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongo_uri),
    UsersModule,
    AuthModule,
    SessionModule,
    CaslModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
