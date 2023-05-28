import { Controller, Get } from '@nestjs/common';
import { MasterDataService } from './master-data.service';

@Controller('masterData')
export class MasterDataController {
    constructor(private masterDataService: MasterDataService) {}

    @Get("/sports")
    getSports() {
        return this.masterDataService.getSports();
    }

    @Get("/cities")
    getCities() {
        return this.masterDataService.getCities();
    }

}
