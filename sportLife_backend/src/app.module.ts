import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisteredUserModule } from './registered-user/registered-user.module';
import { UserModule } from './user/auth.module';
import { RegisteredUser } from './registered-user/registered-user.model';
import { Admin } from './admin/admin.model';
import { EventModule } from './event/event.module';
import { MasterDataController } from './master-data/master-data.controller';
import { Event } from './event/event.model';
import { City, Sport } from './master-data/master-data.models';
import { MasterDataModule } from './master-data/master-data.module';

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
      entities: [RegisteredUser, Admin, Event, Sport, City],
      synchronize: true
    }),
    AdminModule,
    RegisteredUserModule,
    EventModule,
    MasterDataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
