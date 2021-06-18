import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth/auth.controller';
import { DrivhusController } from './controllers/drivhus/drivhus.controller';
import { HoensehusController } from './controllers/hoensehus/hoensehus.controller';
import { DashboardController } from './controllers/dashboard/dashboard.controller';

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
