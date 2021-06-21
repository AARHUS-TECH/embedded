import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth/auth.controller';
import { DrivhusController } from './controllers/drivhus/drivhus.controller';
import { HoensehusController } from './controllers/hoensehus/hoensehus.controller';
import { DashboardController } from './controllers/dashboard/dashboard.controller';
import { Injectable } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://User:Datait2021@Database.hsfog.mongodb.net/Cluser0?retryWrites=true&w=majority')],
})


@Module({
  imports: [],
  controllers: [
    AppController, 
    AuthController,
    DrivhusController,
    HoensehusController,
    DashboardController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
