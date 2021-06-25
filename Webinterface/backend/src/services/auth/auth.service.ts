import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable } from 'rxjs';
import { Usermodel } from 'src/models/user.model';
import { UserService } from '../user/user.service';
const bcrypt = require('bcrypt');

var ObjectId = require('mongodb').ObjectID;

@Injectable()
export class AuthService {

    constructor(
        // private readonly jwtService: JwtService,
        private userService: UserService
    ) {}

    async validateUser(username: string, password: string) {
    
        const user = await this.userService.findUser(username);

        if (user && user.password === password) {
            const { password, username, ...rest } = user;
            return user;
        }

        return null;
    }
}