import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authservice: AuthService) {
        super(); // strategy config 
    }

    public async validate(id: string, username: string, password: string) {
        const user = await this.authservice.validateUser(id, username, password);

        if (!user) {
            throw new UnauthorizedException("Go a way")
        }

        return user;
    }
}