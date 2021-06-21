import { Body, Controller, Get, Post } from '@nestjs/common';
import { HoensehusService } from 'src/services/hoensehus/hoensehus.service';
import { hoensehusDTO } from 'src/DTO/hoensehus.DTO';

@Controller('hoensehus')
export class HoensehusController {

    constructor(
        private hoensehusService: HoensehusService
    ) {}

    @Post()
    public sendDataToCloud(@Body() hoensehusdto: hoensehusDTO) {
        return this.hoensehusService.sendDataToCloud(hoensehusdto);
    }

    @Get()
    public GetDataFromCloud() {
        return this.hoensehusService.GetDataFromCloud();
    }
} 
