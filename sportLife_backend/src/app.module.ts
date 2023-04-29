import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisteredUserModule } from './registered-user/registered-user.module';
import { UserModule } from './user/auth.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 49153,
      username: 'postgres',
      password: 'postgrespw',
      database: 'postgres',
      entities: [],
    }),
    AdminModule,
    RegisteredUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
