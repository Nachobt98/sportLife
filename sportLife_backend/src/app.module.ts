import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisteredUserModule } from './registered-user/registered-user.module';
import { UserModule } from './user/auth.module';
import { RegisteredUser } from './registered-user/registered-user.model';
import { Admin } from './admin/admin.model';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'postgres',
      entities: [RegisteredUser, Admin],
      synchronize: true
    }),
    AdminModule,
    RegisteredUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
