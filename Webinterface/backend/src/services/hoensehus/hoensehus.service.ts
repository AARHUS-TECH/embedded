import { Injectable } from '@nestjs/common';
import { hoensehusDTO } from 'src/DTO/hoensehus.DTO';

@Injectable()
export class HoensehusService {
    public sendDataToCloud(hoensehusDto: hoensehusDTO) {
        console.log(hoensehusDto);
    }

    public GetDataFromCloud() {
        console.log("hej")
    }
}
