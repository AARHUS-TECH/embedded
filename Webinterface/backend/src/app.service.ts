import { Injectable } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://User:Datait2021@Database.hsfog.mongodb.net/Cluser0?retryWrites=true&w=majority')],
})

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
