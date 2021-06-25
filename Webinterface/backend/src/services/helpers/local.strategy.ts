import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from '../auth/auth.service';
import * as mongoose from '@nestjs/mongoose';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authservice: AuthService) {
        super(); // strategy config 
    }

    public async validate(username: string, password: string) {
        const user = await this.authservice.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException("Go a way")
        }

        return user;
    }
}