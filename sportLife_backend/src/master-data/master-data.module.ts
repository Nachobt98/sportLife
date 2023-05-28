import { Module } from '@nestjs/common';
import { MasterDataService } from './master-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City, Sport } from './master-data.models';
import { MasterDataController } from './master-data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sport, City])],
  controllers: [MasterDataController],
  providers: [MasterDataService],
})
export class MasterDataModule {}
