import { NestFactory } from '@nestjs/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { AppModule } from './app.module';
const session = require('express-session');
const MongoStore = require('connect-mongo');
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use(session({
    secret: 'foo',
    resave: false,
    store: MongoStore.create({
      mongoUrl: 'mongodb+srv://ProjektStyring:SKPDataIT2021@cluster0.hsfog.mongodb.net/Cluster0?retryWrites=true&w=majority',
      ttl: 14 * 24 * 60 * 60, // 14 dage
      autoRemove: 'native', // defaiæt
      autoRemoveInterval: 10,
      // crypto: {
      //   secret: 'squirrel',
      //   hashing: 'sha512'
      // }
    })
  }))

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
