import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { DrivhusController } from './controllers/drivhus/drivhus.controller';
import { UserController } from './controllers/User/user.controller';
import { DashboardController } from './controllers/dashboard/dashboard.controller';

import { AppService } from './app.service';
import { AuthService } from './services/auth/auth.service'
import { DashboardService } from './services/dashboard/dashboard.service';
import { DrivhusService } from './services/drivhus/drivhus.service';
import { UserService } from './services/user/user.service';

const MongoClient = require('mongodb').MongoClient;

import { UserSchema } from './models/user.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ProjektStyring:SKPDataIT2021@cluster0.hsfog.mongodb.net/Cluster0?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'UserSchema', schema: UserSchema }])
  ],
  controllers: [
    AppController, 
    AuthController,
    DrivhusController,
    UserController,
    DashboardController
  ],
  providers: [
    AppService,
    AuthService,
    DashboardService,
    DrivhusService,
    UserService
  ],
})
export class AppModule {}
