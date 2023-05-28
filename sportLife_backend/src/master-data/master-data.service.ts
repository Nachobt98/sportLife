import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City, Sport } from './master-data.models';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';

@Injectable()
export class MasterDataService implements OnModuleInit {
    constructor(
        @InjectRepository(Sport)
        private sportRepository: Repository<Sport>,
        @InjectRepository(City)
        private cityRepository: Repository<City>
      ) {}

    async onModuleInit() {
        let sports: Sport[] = [new Sport("Futbol"), new Sport("Judo"), new Sport("Baloncesto"), new Sport("Padel")];
        for(let i = 0; i < sports.length; i++) {
            let sportExists = await this.sportRepository.findOne({where: [{ name : sports[i].name}]})
            if(!sportExists) {
                this.sportRepository.save(sports[i])
                }
        }

        let cities: City[] = [new City("Valencia"), new City("Sevilla"), new City("Madrid"), new City("Barcelona")]
        for(let i = 0; i < cities.length; i++) {
            let cityExists = await this.cityRepository.findOne({where: [{ name : cities[i].name}]})
            if(!cityExists) {
                this.cityRepository.save(cities[i])
                }
        }
    }

    async getSports() {
        const sports = await this.sportRepository.find();
        return sports;
    }
    
    async getCities() {
        const cities = await this.cityRepository.find();
        return cities;
    }
}
