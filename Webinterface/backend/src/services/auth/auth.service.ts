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

    async validateUser(id: string, username: string, password: string) {
    
        const user = await this.userService.findUser(id);

        if (user && user.password === password) {
            const { password, username, ...rest } = user;
            return user;
        }

        return null;
    }
}

    // public async login(id: string) {
    //     return await this.userService.GetOneUser(id)
    // }


    // generateJWT(): Observable<string> {
    //     return from(this.jwtService.signAsync({Usermodel}))
    // }

    // hashPassword(password: string): Observable<string> {
    //     return from<string>(bcrypt.hash(password, 12))
    // }

    // comparePasswords(newPassword: string, passwortHash: string): Observable<any> {
    //     return from(bcrypt.compare(newPassword, passwortHash));
    // }