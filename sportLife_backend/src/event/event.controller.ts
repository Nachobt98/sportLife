import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) {}

    @Get("/getAll")
    getSports() {
        return this.eventService.getAll();
    }

    @Post('/createEvent')
    createUser(@Body() body: any) {
        return this.eventService.createEvent(body);
    }
}
