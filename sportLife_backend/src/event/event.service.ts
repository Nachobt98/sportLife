import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './event.model';
import { Repository } from 'typeorm';
import e from 'express';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event)
        private eventRepository: Repository<Event>,
      ) {}

    async getAll() {
        const events = await this.eventRepository.find();
        return events
    }

    async createEvent(body: any) {
        let event = new Event(body["name"], body["description"], body["sport"], body["members"]);
        let result = this.eventRepository.save(event);
        if(result) {
            return event;
        }
        return new BadRequestException;
    }

    
}
